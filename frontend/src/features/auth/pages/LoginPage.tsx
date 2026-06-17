import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

import {
  login,
  signInWithGoogle,
} from "../services/auth.service";

import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

import api from "@/lib/api";
import { useAuthStore } from "@/store/authStore";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    googleLoading,
    setGoogleLoading,
  ] = useState(false);

  const [error, setError] =
    useState("");

  const [errors, setErrors] =
    useState({
      email: "",
      password: "",
    });

  const setUser =
    useAuthStore(
      (state) => state.setUser
    );

  const validateForm = () => {
    const newErrors = {
      email:
        validateEmail(email),

      password:
        validatePassword(password),
    };

    setErrors(newErrors);

    return !Object.values(
      newErrors
    ).some(Boolean);
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    const isValid =
      validateForm();

    if (!isValid) return;

    try {
      setLoading(true);

      const {
        session,
        user,
      } = await login(
        email,
        password
      );

      if (!session) {
        setError(
          "Please verify your email before logging in."
        );
        return;
      }

      const authHeader = {
        Authorization: `Bearer ${session.access_token}`,
      };

      // tạo profile nếu chưa tồn tại
      await api.post(
        "/users/profile",
        {
          email: user.email,

          fullName:
            user.user_metadata
              ?.full_name || "",

          username:
            user.user_metadata
              ?.username ||
            user.email
              ?.split("@")[0] ||
            "",
        },
        {
          headers: authHeader,
        }
      );

      // lấy profile backend
      const profile =
        await api.get(
          "/users/me",
          {
            headers: authHeader,
          }
        );

      setUser(
        profile.data
      );

      navigate(
        "/dashboard"
      );

    } catch (err) {

      console.error(err);

      if (err instanceof Error) {

        setError(
          err.message
        );

      } else {

        setError(
          "Login failed"
        );
      }

    } finally {

      setLoading(false);
    }
  };

  const handleGoogleSignIn =
    async () => {

      try {

        setError("");

        setGoogleLoading(
          true
        );

        await signInWithGoogle();

      } catch (err) {

        if (err instanceof Error) {

          setError(
            err.message
          );

        } else {

          setError(
            "Google login failed"
          );
        }

      } finally {

        setGoogleLoading(
          false
        );
      }
    };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue managing your tasks"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {error && (
          <div
            className="
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              text-red-600
            "
          >
            {error}
          </div>
        )}

        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(
                e.target.value
              );

              if (
                errors.email
              ) {
                setErrors(
                  (
                    prev
                  ) => ({
                    ...prev,
                    email:
                      "",
                  })
                );
              }
            }}
          />

          {errors.email && (
            <p
              className="
                mt-1
                text-sm
                text-red-500
              "
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(
                e.target.value
              );

              if (
                errors.password
              ) {
                setErrors(
                  (
                    prev
                  ) => ({
                    ...prev,
                    password:
                      "",
                  })
                );
              }
            }}
          />

          {errors.password && (
            <p
              className="
                mt-1
                text-sm
                text-red-500
              "
            >
              {errors.password}
            </p>
          )}
        </div>

        <div
          className="
            flex
            justify-end
          "
        >
          <Link
            to="/forgot-password"
            className="
              text-sm
              font-medium
              text-secondary
              hover:underline
            "
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          title="Login"
        />

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div className="h-px flex-1 bg-gray-200" />

          <span
            className="
              text-sm
              text-gray-400
            "
          >
            OR
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Button
          type="button"
          variant="secondary"
          loading={googleLoading}
          disabled={googleLoading}
          onClick={
            handleGoogleSignIn
          }
          title="Continue with Google"
        />
      </form>

      <p
        className="
          mt-6
          text-center
          text-sm
          text-gray-500
        "
      >
        Don&apos;t have an account?{" "}

        <Link
          to="/register"
          className="
            font-semibold
            text-secondary
            hover:underline
          "
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;