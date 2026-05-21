import { Link } from "react-router-dom";

import AuthLayout from "../../components/ui/AuthLayout";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue managing your tasks"
    >
      <form className="space-y-4">
        <Input
          placeholder="Email Address"
          type="email"
        />

        <Input
          placeholder="Password"
          type="password"
        />

        <Button
          title="Login"
          type="submit"
        />
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-secondary font-semibold"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;