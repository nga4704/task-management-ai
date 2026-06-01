// pages/ForgotPasswordPage.tsx

import {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Input from "../../../shared/components/common/Input";

import Button from "../../../shared/components/common/Button";

function ForgotPasswordPage() {

  const [email,
    setEmail]
    = useState("");

  const [loading,
    setLoading]
    = useState(false);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setLoading(true);

        // await forgotPassword(email)

        alert(
          "Reset link sent"
        );

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
        onSubmit={
          handleSubmit
        }
        className="space-y-4"
      >
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
          title={
            loading
              ? "Sending..."
              : "Send Reset Link"
          }
          type="submit"
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