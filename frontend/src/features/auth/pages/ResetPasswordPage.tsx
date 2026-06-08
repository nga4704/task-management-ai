// pages/ResetPasswordPage.tsx

import {
  useState,
} from "react";

import {
  useNavigate, useParams
} from "react-router-dom";

import AuthLayout from "../../../app/layouts/AuthLayout";

import Input from "../../../shared/components/common/Input";

import Button from "../../../shared/components/common/Button";
import {
  resetPassword
}
from "../services/auth.service";

function ResetPasswordPage() {

  const navigate =
    useNavigate();

  const [password,
    setPassword]
    = useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading,
    setLoading]
    = useState(false);

  const {
    token
  } = useParams();

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      if (
        password !==
        confirmPassword
      ) {

        alert(
          "Passwords do not match"
        );

        return;
      }

      try {

        setLoading(true);

        await resetPassword(
          token!,
          password
        );

        alert(
          "Password updated successfully"
        );

        navigate(
          "/login"
        );

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
        onSubmit={
          handleSubmit
        }
        className="space-y-4"
      >
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
          value={
            confirmPassword
          }
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <Button
          title={
            loading
              ? "Updating..."
              : "Reset Password"
          }
          type="submit"
        />
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;