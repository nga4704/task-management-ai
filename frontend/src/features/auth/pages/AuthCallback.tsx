import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "@/lib/supabase";
import api from "@/lib/api";
import {useAuthStore} from "@/store/authStore";

function AuthCallback() {
    const navigate =
        useNavigate();

    useEffect(() => {

        const handleAuth =
            async () => {

                const {
                    data: { session },
                } =
                    await supabase.auth.getSession();

                if (!session) {
                    navigate("/login");
                    return;
                }

                const user =
                    session.user;

                await api.post(
                    "/users/profile",
                    {
                        // id: user.id,
                        email: user.email,
                        fullName:
                            user.user_metadata
                                ?.full_name || "",
                        username:
                            user.email?.split("@")[0],
                    }
                );

                const profile =
                    await api.get(
                        "/users/me"
                    );

                useAuthStore
                    .getState()
                    .setUser(
                        profile.data
                    );

                navigate(
                    "/dashboard"
                );
            };

        handleAuth();

    }, []);

    return (
        <div>
            Signing in...
        </div>
    );
}

export default AuthCallback;