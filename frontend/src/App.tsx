import AppRoutes from "./app/routes/AppRoutes";

import { useEffect } from "react";
import { useAuthStore } from "./features/auth/store/authStore";
import api from "./services/api";

function App() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchMe();
  }, []);

  return <AppRoutes />;
}

export default App;