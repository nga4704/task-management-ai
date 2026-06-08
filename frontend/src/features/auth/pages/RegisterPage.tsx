import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";

import AuthLayout from "../../../app/layouts/AuthLayout";
import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";
import { register } from "../services/auth.service";

import GoogleAuthButton from "../components/GoogleAuthButton";

function RegisterPage() {
  const navigate = useNavigate();

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

  const [loading,
    setLoading]
    = useState(false);

  const handleSubmit = async (e: FormEvent) => {
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

      await register({
        fullName,
        username,
        email,
        password,
      });

      alert("Register successfully");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Register failed");
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
          title={
            loading
              ? "Creating..."
              : "Create Account"
          }
          type="submit"
          disabled={loading}
        />
        <div className="h-px flex-1 bg-gray-200" />

{/* 
        <GoogleAuthButton
          onSuccess={(res) => {
            console.log(res);
          }}
          onError={() => {
            alert("Google login failed");
          }}
        /> */}
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-secondary font-semibold"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;