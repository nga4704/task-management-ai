import { useState } from "react";

import {
  Link,
} from "react-router-dom";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Input from "../../../shared/components/common/Input";

import Button from "../../../shared/components/common/Button";

import {
  forgotPassword,
} from "../services/auth.service";

import {
  validateEmail,
} from "../utils/validation";

function ForgotPasswordPage() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      setError("");
      setSuccess("");

      const emailError =
        validateEmail(email);

      if (emailError) {

        setError(emailError);

        return;
      }

      try {

        setLoading(true);

        await forgotPassword(
          email
        );

        setSuccess(
          "Password reset email sent successfully."
        );

      } catch (err) {

        if (err instanceof Error) {

          setError(
            err.message
          );
        }

      } finally {

        setLoading(false);
      }
    };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a reset link"
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

        {success && (
          <div
            className="
              rounded-xl
              bg-green-100
              px-4
              py-3
              text-sm
              text-green-600
            "
          >
            {success}
          </div>
        )}

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

        <Button
          type="submit"
          disabled={loading}
          title={
            loading
              ? "Sending..."
              : "Send Reset Link"
          }
        />
      </form>

      <p
        className="
          mt-6
          text-center
          text-sm
        "
      >
        <Link
          to="/login"
          className="text-secondary"
        >
          Back to Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;