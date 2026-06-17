
// src/features/auth/utils/validation.ts

export const validateEmail = (
  email: string
): string => {
  if (!email.trim()) {
    return "Email is required";
  }

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return "Invalid email format";
  }

  return "";
};

export const validatePassword = (
  password: string
): string => {

  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!/[A-Z]/.test(password)) {
    return "Must contain at least one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Must contain at least one lowercase letter";
  }

  if (!/[0-9]/.test(password)) {
    return "Must contain at least one number";
  }

  return "";
};

export const validateFullName = (
  fullName: string
): string => {
  if (!fullName.trim()) {
    return "Full name is required";
  }

  if (fullName.length < 2) {
    return "Full name is too short";
  }

  return "";
};

export const getAuthErrorMessage = (
  message: string
): string => {
  switch (message) {
    case "Invalid login credentials":
      return "Incorrect email or password";

    case "Email not confirmed":
      return "Please verify your email first";

    case "User already registered":
      return "Email already exists";

    default:
      return message;
  }
};

