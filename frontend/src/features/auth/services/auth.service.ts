import api from "../../../services/api";
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