"use server";

import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export async function submitContactForm(
  data: FormData
): Promise<{ ok: boolean; error?: string }> {
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const subject = data.get("subject")?.toString().trim() ?? "General Enquiry";
  const message = data.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const submission: ContactSubmission = {
    name,
    email,
    subject,
    message,
    submittedAt: new Date().toISOString(),
  };

  // V1: save to a local JSON log file
  // V2: replace with Resend API call (RESEND_API_KEY env var)
  try {
    const logsDir = join(process.cwd(), "data", "contact-submissions");
    await mkdir(logsDir, { recursive: true });

    const fileName = `${Date.now()}-${name.replace(/\s+/g, "-").toLowerCase()}.json`;
    await writeFile(
      join(logsDir, fileName),
      JSON.stringify(submission, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    return { ok: false, error: "Failed to send message. Please try again." };
  }

  return { ok: true };
}
