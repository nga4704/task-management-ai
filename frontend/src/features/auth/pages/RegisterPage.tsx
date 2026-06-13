
// src/features/auth/pages/RegisterPage.tsx

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

import { register } from "../services/auth.service";
import api from "@/lib/api";

import {
  validateEmail,
  validatePassword,
  validateFullName,
  validateUsername,
  getAuthErrorMessage,
} from "../utils/validation";

function RegisterPage() {
  const navigate =
    useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    const fullNameError =
      validateFullName(fullName);

    const usernameError =
      validateUsername(username);

    const emailError =
      validateEmail(email);

    const passwordError =
      validatePassword(password);

    if (fullNameError) {
      setError(fullNameError);
      return;
    }

    if (usernameError) {
      setError(usernameError);
      return;
    }

    if (emailError) {
      setError(emailError);
      return;
    }

    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (
      password !== confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );

      return;
    }

    try {
      setLoading(true);

      const result =
        await register(
          email,
          password,
          fullName,
          username
        );

      if (result.user) {

        await api.post(
          "/users/profile",
          {
            // id: result.user.id,
            email,
            username,
            fullName,
          }
        );
      }

      alert(
        "Please verify your email before login"
      );

      navigate("/login");

    } catch (err) {

      if (err instanceof Error) {

        setError(
          getAuthErrorMessage(
            err.message
          )
        );
      }

    } finally {

      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing your work smarter"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {error && (
          <div
            className="
              rounded-xl
              bg-red-100
              px-4
              py-3
              text-sm
              text-red-600
            "
          >
            {error}
          </div>
        )}

        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) =>
            setFullName(
              e.target.value
            )
          }
        />

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <Input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <Button
          type="submit"
          disabled={loading}
          title={
            loading
              ? "Creating..."
              : "Create Account"
          }
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
        Already have an account?{" "}

        <Link
          to="/login"
          className="
            font-semibold
            text-secondary
          "
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;

