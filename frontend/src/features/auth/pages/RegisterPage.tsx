import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

import {
  register,
} from "../services/auth.service";

import api from "@/lib/api";

import {
  validateEmail,
  validatePassword,
  validateFullName,
  getAuthErrorMessage,
} from "../utils/validation";

function RegisterPage() {

  const [registered,
    setRegistered]
    = useState(false);

  const navigate =
    useNavigate();

  const [fullName,
    setFullName]
    = useState("");

  const [email,
    setEmail]
    = useState("");

  const [password,
    setPassword]
    = useState("");

  const [confirmPassword,
    setConfirmPassword]
    = useState("");

  const [loading,
    setLoading]
    = useState(false);

  const [error,
    setError]
    = useState("");

  const [success,
    setSuccess]
    = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    const fullNameError =
      validateFullName(
        fullName
      );

    if (fullNameError) {
      setError(fullNameError);
      return;
    }

    const emailError =
      validateEmail(email);

    if (emailError) {
      setError(emailError);
      return;
    }

    const passwordError =
      validatePassword(
        password
      );

    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );

      return;
    }

    try {

      setLoading(true);

      const username =
        email
          .split("@")[0]
          .toLowerCase();

      const result =
        await register(
          email,
          password,
          fullName,
          username
        );

      // setSuccess(
      //   "Account created successfully. Please verify your email before logging in."
      // );

      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);

      setRegistered(true);

    } catch (err) {

      if (err instanceof Error) {

        setError(
          getAuthErrorMessage(
            err.message
          )
        );

      } else {

        setError(
          "Registration failed"
        );
      }

    } finally {

      setLoading(false);
    }
  };

  if (registered) {
    return (
      <AuthLayout
        title="Verify Your Email"
        subtitle="One more step before accessing your workspace"
      >
        <div className="space-y-6">

          <div
            className="
            rounded-3xl
            border
            border-success/20
            bg-successLight
            p-6
          "
          >
            <div
              className="
              mb-3
              text-4xl
            "
            >
              ✉️
            </div>

            <h3
              className="
              text-lg
              font-semibold
            "
            >
              Verification email sent
            </h3>

            <p
              className="
              mt-2
              text-sm
              text-muted
            "
            >
              We've sent a verification link to:
            </p>

            <p
              className="
              mt-2
              font-semibold
            "
            >
              {email}
            </p>

            <p
              className="
              mt-4
              text-sm
              text-muted
            "
            >
              Please check your inbox and
              click the verification link
              before logging in.
            </p>

            <p
              className="
              mt-2
              text-sm
              text-muted
            "
            >
              If you don't see the email,
              please check your spam folder.
            </p>
          </div>

          <Button
            title="Go to Login"
            onClick={() =>
              navigate("/login")
            }
          />
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing projects smarter with AI"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {error && (
          <div
            className="
              rounded-2xl
              border
              border-danger/20
              bg-dangerLight
              px-4
              py-3
              text-sm
              text-danger
            "
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="
              rounded-2xl
              border
              border-success/20
              bg-successLight
              px-4
              py-3
              text-sm
              text-success
            "
          >
            {success}
          </div>
        )}

        <Input
          label="Full Name"
          placeholder="John Doe"
          autoComplete="name"
          value={fullName}
          onChange={(e) =>
            setFullName(
              e.target.value
            )
          }
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a secure password"
          autoComplete="new-password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          title="Create Account"
        />

      </form>

      <p
        className="
          mt-6
          text-center
          text-sm
          text-muted
        "
      >
        Already have an account?{" "}

        <Link
          to="/login"
          className="
            font-semibold
            text-secondary
            hover:underline
          "
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;