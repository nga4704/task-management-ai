import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import type {
  FormEvent,
  ChangeEvent,
} from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

import AuthLayout from "../../../app/layouts/AuthLayout";
import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

import api from "../../../services/api";
import { login } from "../services/auth.service";

import {
  useAuthStore,
} from "../store/authStore";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const setTokens =
    useAuthStore(
      (state) =>
        state.setTokens
    );

  const setUser =
    useAuthStore(
      (state) =>
        state.setUser
    );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      const { accessToken, refreshToken, user } = response.data;

      setUser(user);
      setTokens(accessToken, refreshToken);

      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    async (
      credentialResponse: any
    ) => {

      try {

        const credential =
          credentialResponse?.credential;

        if (!credential) {

          alert(
            "No Google credential received"
          );

          return;
        }

        const response =
          await api.post(
            "/auth/google",
            {
              credential,
            }
          );

        const data =
          response.data;

        setUser(
          data.user
        );

        setTokens(
          data.accessToken,
          data.refreshToken
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Google login failed"
        );
      }
    };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue managing your tasks"
    >
      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-4"
      >
        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(
            e: ChangeEvent<HTMLInputElement>
          ) =>
            setEmail(
              e.target.value
            )
          }
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(
            e: ChangeEvent<HTMLInputElement>
          ) =>
            setPassword(
              e.target.value
            )
          }
        />

        <Button
          title={
            loading
              ? "Signing In..."
              : "Login"
          }
          type="submit"
          disabled={
            loading
          }
        />

        <div className="flex justify-center pt-2">
          <GoogleLogin
            onSuccess={
              handleGoogleLogin
            }
            onError={() => {

              alert(
                "Google Login Failed"
              );
            }}
          />
        </div>
      </form>

      <p
        className="
          mt-6
          text-center
          text-sm
          text-gray-500
        "
      >
        Don't have an account?{" "}
        <Link
          to="/register"
          className="
            font-semibold
            text-secondary
          "
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;