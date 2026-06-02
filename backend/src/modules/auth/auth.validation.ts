import { z } from "zod";

export const refreshSchema = z.object({
  body: z.object({
    refreshToken: z.string(),
  }),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(3),

  email: z
    .string()
    .email(),

  password: z
    .string()
    .min(6),

  fullName: z
    .string()
    .min(2),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});