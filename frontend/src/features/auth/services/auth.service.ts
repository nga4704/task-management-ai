// src/features/auth/services/auth.service.ts

import { supabase } from "../../../lib/supabase";

const getAuthErrorMessage = (
  message: string
): string => {
  switch (message) {
    case "Invalid login credentials":
      return "Incorrect email or password";

    case "Email not confirmed":
      return "Please verify your email before login";

    case "User already registered":
      return "Email already exists";

    default:
      return message;
  }
};
// ==============================
// LOGIN
// ==============================

export const login = async (
  email: string,
  password: string
) => {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw new Error(
      getAuthErrorMessage(error.message)
    );
  }

  return {
    session: data.session,
    user: data.user,
  };
};

// ==============================
// REGISTER
// ==============================

export const register = async (
  email: string,
  password: string,
  fullName: string,
  username: string
) => {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: fullName,
          username,
        },

        emailRedirectTo:
          "http://localhost:5173/login",
      },
    });

  if (error) {
    throw new Error(
      getAuthErrorMessage(error.message)
    );
  }

  return data;
};

// ==============================
// GOOGLE LOGIN
// ==============================

export const signInWithGoogle =
  async () => {
    const { error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",

        options: {
          redirectTo:
            "http://localhost:5173/auth/callback",
        },
      });

    if (error) {
      throw new Error(error.message);
    }
  };

// ==============================
// LOGOUT
// ==============================

export const logout = async () => {
  const { error } =
    await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

// ==============================
// FORGOT PASSWORD
// ==============================

export const forgotPassword =
  async (email: string) => {

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            "http://localhost:5173/reset-password",
        }
      );

    if (error) {

      throw new Error(
        getAuthErrorMessage(
          error.message
        )
      );
    }
  };

// ==============================
// UPDATE PASSWORD
// ==============================

export const updatePassword =
  async (password: string) => {

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {

      throw new Error(
        getAuthErrorMessage(
          error.message
        )
      );
    }
  };

