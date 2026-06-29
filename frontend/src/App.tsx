import { useEffect } from "react";

import AppRoutes from "./app/routes/AppRoutes";

import api from "./lib/api";
import { supabase } from "./lib/supabase";

import { useAuthStore } from "./store/authStore";
import { useNotificationSocket } from "@/features/notifications/hooks/useNotificationSocket";

function App() {
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  useNotificationSocket();

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);

      const { data: { session } } =
        await supabase.auth.getSession();

      if (!session) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const profile = await api.get("/users/me");

        setUser(profile.data);
      } catch (error) {
        console.error(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();

    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        if (!session) {
          setUser(null);
          return;
        }

        loadProfile();
      });

    return () => subscription.unsubscribe();
  }, []);

  return <AppRoutes />;
}

export default App;