import jwt from "jsonwebtoken";


// ACCESS TOKEN
export const generateAccessToken = (
  userId: string
) => {

  return jwt.sign(
    { userId },

    process.env.JWT_SECRET as string,

    {
      expiresIn: "15m",
    }
  );
};


// REFRESH TOKEN
export const generateRefreshToken = (
  userId: string
) => {

  return jwt.sign(
    { userId },

    process.env.JWT_REFRESH_SECRET as string,

    {
      expiresIn: "7d",
    }
  );
};