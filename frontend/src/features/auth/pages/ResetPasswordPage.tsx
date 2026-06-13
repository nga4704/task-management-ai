import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Input from "../../../shared/components/common/Input";

import Button from "../../../shared/components/common/Button";

import {
  updatePassword,
} from "../services/auth.service";

import {
  validatePassword,
} from "../utils/validation";

function ResetPasswordPage() {

  const navigate =
    useNavigate();

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

  const [success, setSuccess] =
    useState("");

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      setError("");
      setSuccess("");

      const passwordError =
        validatePassword(
          password
        );

      if (passwordError) {

        setError(
          passwordError
        );

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

        await updatePassword(
          password
        );

        setSuccess(
          "Password updated successfully."
        );

        setTimeout(() => {

          navigate(
            "/login"
          );

        }, 1500);

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
      title="Reset Password"
      subtitle="Create a new password for your account"
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
          placeholder="New Password"
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
              ? "Updating..."
              : "Reset Password"
          }
        />
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;