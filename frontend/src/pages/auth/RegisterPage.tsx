import { Link } from "react-router-dom";

import AuthLayout from "../../components/ui/AuthLayout";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing your work smarter"
    >
      <form className="space-y-4">
        <Input placeholder="Full Name" />

        <Input
          placeholder="Email Address"
          type="email"
        />

        <Input
          placeholder="Password"
          type="password"
        />

        <Button
          title="Create Account"
          type="submit"
        />
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