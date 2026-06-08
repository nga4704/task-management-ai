import jwt from "jsonwebtoken";

export const generateResetToken = (
  userId: string
) => {

  return jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    {
      expiresIn: "15m",
    }
  );
};