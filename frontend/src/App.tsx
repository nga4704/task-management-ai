// src/App.tsx

import { useEffect } from "react";

import AppRoutes from "./app/routes/AppRoutes";

import { supabase } from "./lib/supabase";

import { useAuthStore } from "./store/authStore";

function App() {

  const setUser =
    useAuthStore(
      (state) => state.setUser
    );

  useEffect(() => {

    // restore session
    const restoreSession =
      async () => {

        const {
          data: { session },
        } =
          await supabase.auth.getSession();

        if (session?.user) {

          setUser({
            id: session.user.id,

            email:
              session.user.email || "",

            full_name:
              session.user.user_metadata
                ?.full_name || "",

            username:
              session.user.user_metadata
                ?.username || "",
          });

        } else {

          setUser(null);
        }
      };

    restoreSession();

    // listen auth changes
    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {

          if (session?.user) {

            setUser({
              id: session.user.id,

              email:
                session.user.email || "",

              full_name:
                session.user.user_metadata
                  ?.full_name || "",

              username:
                session.user.user_metadata
                  ?.username || "",
            });

          } else {

            setUser(null);
          }
        }
      );

    return () => {

      listener.subscription.unsubscribe();
    };

  }, [setUser]);

  return <AppRoutes />;
}

export default App;