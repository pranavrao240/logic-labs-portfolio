import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-email";
import { logToSheet } from "@/lib/sheet-logger";

type PathKey = "print" | "filament" | "partnership";
const VALID_PATHS: PathKey[] = ["print", "filament", "partnership"];

export async function POST(req: NextRequest) {
  //  1. Parse & validate body
  let body: { path?: PathKey; fields?: Record<string, string> };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { path, fields } = body;

  if (!path || !VALID_PATHS.includes(path)) {
    return NextResponse.json(
      { ok: false, error: "Invalid or missing path" },
      { status: 400 },
    );
  }

  if (!fields || typeof fields !== "object") {
    return NextResponse.json(
      { ok: false, error: "Missing fields object" },
      { status: 400 },
    );
  }

  if (!fields.name?.trim() || !fields.email?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required" },
      { status: 422 },
    );
  }

  //  2. Fire both in parallel
  const [emailResult, sheetResult] = await Promise.allSettled([
    sendContactEmail(path, fields),
    logToSheet(path, fields),
  ]);

  const emailOk = emailResult.status === "fulfilled";
  const sheetOk =
    sheetResult.status === "fulfilled" &&
    (sheetResult.value as { ok: boolean }).ok;

  // Log any failures server-side (visible in Vercel / server logs)
  if (!emailOk) {
    console.error(
      "[contact/route] Zoho email failed:",
      (emailResult as PromiseRejectedResult).reason,
    );
  }
  if (!sheetOk) {
    const reason =
      sheetResult.status === "rejected"
        ? (sheetResult as PromiseRejectedResult).reason
        : (sheetResult.value as { error?: string }).error;
    console.warn("[contact/route] Sheet log failed:", reason);
  }

  if (!emailOk) {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send email. Please try again or contact us directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, sheetLogged: sheetOk });
}
