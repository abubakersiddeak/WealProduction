import { connectMongodb } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/app/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"; // Ensure NextResponse is imported

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectMongodb();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await generateToken(user);

    const cookieStore = cookies(); // Use cookies() directly
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true, // client side থেকে JS অ্যাক্সেস পাবে না (সিকিউরিটি বাড়ে)
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60, // ১ ঘন্টা
      sameSite: "lax",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}