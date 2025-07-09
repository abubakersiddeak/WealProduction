import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const ALG = "HS256";

export async function generateToken(user) {
  const token = await new SignJWT({ id: user._id, name: user.name, role: user.role })
    .setProtectedHeader({ alg: ALG })
    .setExpirationTime("1d")
    .sign(SECRET);
  return token;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}
