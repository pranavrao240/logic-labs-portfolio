type PathKey = "print" | "filament" | "partnership";

export async function logToSheet(
  path: PathKey,
  fields: Record<string, string>,
): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.SHEET_LOGGER_URL;

  if (!url) {
    console.warn("[sheet-logger] SHEET_LOGGER_URL not set — skipping.");
    return { ok: false, error: "SHEET_LOGGER_URL not configured" };
  }

  try {
    // Apps Script doPost() reads e.postData.contents — plain text body, JSON payload.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ path, fields }),
    });

    // Apps Script always returns 200; check our own ok flag in the body.
    const data = await res.json().catch(() => ({ ok: false }));
    return data;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[sheet-logger] fetch failed:", msg);
    return { ok: false, error: msg };
  }
}
