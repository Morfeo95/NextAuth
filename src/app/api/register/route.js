import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  // Simulated registration
  return NextResponse.json({
    success: true,
    user: {
      id: "demo-user",
      email: body.email,
      role: "USER",
    },
  });
}
