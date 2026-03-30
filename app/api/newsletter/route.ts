import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // V1: append to a local log file
    // V2: integrate with Klaviyo/Mailchimp using API key from env
    const logsDir = join(process.cwd(), "data", "newsletter-signups");
    await mkdir(logsDir, { recursive: true });

    const entry = JSON.stringify({ email, signedUpAt: new Date().toISOString() }) + "\n";
    await writeFile(join(logsDir, "signups.jsonl"), entry, { flag: "a" });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
