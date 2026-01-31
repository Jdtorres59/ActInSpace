import { NextResponse } from "next/server";

const subscribers: string[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || "");

  if (email) {
    subscribers.push(email);
    console.info("Newsletter signup", email);
  }

  return NextResponse.json({ ok: true });
}
