// @/feature/auth/services/auth.services.ts
import api from "../../../config/api";
import type {
  RegisterPayload,
  LoginPayload,
  AuthResponse
} from "../types/auth.types";

export const login = (data: LoginPayload) => {
  return api.post<AuthResponse>("/auth/login", data);
};

export const register = (data: RegisterPayload) => {
  return api.post("/auth/register", data);
};

export const getMe = () => {

  return api.get(
    "/auth/me"
  );
};

export const logout = () => {

  return api.post(
    "/auth/logout"
  );
};

export const forgotPassword = (
  email: string
) =>
  api.post(
    "/auth/forgot-password",
    { email }
  );

export const resetPassword = (
  token: string,
  password: string
) =>
  api.post(
    "/auth/reset-password",
    {
      token,
      password,
    }
  );