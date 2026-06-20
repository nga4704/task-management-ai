import { useEffect } from "react";

import AppRoutes from "./app/routes/AppRoutes";

import api from "./lib/api";
import { supabase } from "./lib/supabase";

import { useAuthStore } from "./store/authStore";

function App() {
  const setUser =
    useAuthStore(
      (state) => state.setUser
    );

  useEffect(() => {

    const loadProfile =
      async () => {

        const {
          data: { session },
        } =
          await supabase.auth.getSession();

        if (!session) {

          setUser(null);

          return;
        }

        try {

          const profile =
            await api.get(
              "/users/me"
            );

          setUser(
            profile.data
          );

        } catch (error) {

          console.error(
            "Load profile error:",
            error
          );

          setUser(null);
        }
      };

    loadProfile();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {

          if (!session) {

            setUser(null);

            return;
          }

          loadProfile();
        }
      );

    return () => {
      subscription.unsubscribe();
    };

  }, [setUser]);

  return <AppRoutes />;
}

export default App;