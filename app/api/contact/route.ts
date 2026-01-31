import { NextResponse } from "next/server";

const submissions: Array<Record<string, string>> = [];

export async function POST(request: Request) {
  const body = await request.json();

  const payload = {
    name: String(body.name || ""),
    email: String(body.email || ""),
    organization: String(body.organization || ""),
    message: String(body.message || "")
  };

  submissions.push(payload);
  console.info("Contact submission", payload);

  return NextResponse.json({ ok: true });
}
