import { useEffect } from "react";

import AppRoutes from "./app/routes/AppRoutes";
import { supabase } from "./lib/supabase";
import { useAuthStore } from "./store/authStore";

function App() {
  const setSupabaseUser = useAuthStore(
    (state) => state.setSupabaseUser
  );

  useEffect(() => {
    // restore session
    const restoreSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSupabaseUser(session?.user ?? null);
    };

    restoreSession();

    // listen auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSupabaseUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [setSupabaseUser]);

  return <AppRoutes />;
}

export default App;