import { getTransporter } from "./zoho-mail";

type PathKey = "print" | "filament" | "partnership";

//  Routing: which inbox receives which path
const PATH_META: Record<PathKey, { brand: string; toEnvKey: string }> = {
  print: { brand: "Logic Labs Software", toEnvKey: "MAIL_TO_PRINT" },
  filament: { brand: "Logic Labs Hardware", toEnvKey: "MAIL_TO_FILAMENT" },
  partnership: { brand: "Logic Labs", toEnvKey: "MAIL_TO_PARTNERSHIP" },
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone / WhatsApp",
  company: "Company & Role",
  projectType: "Project Type",
  material: "Material",
  quantity: "Quantity",
  timeline: "Timeline",
  orderType: "Order Type",
  filamentType: "Filament Type",
  colorFinish: "Colour / Finish",
  deliveryLocation: "Delivery Location",
  partnershipType: "Partnership Type",
  region: "Region / Market",
  volume: "Volume / Scope",
  message: "Message / Details",
};

// HTML email builder

function buildHtml(path: PathKey, fields: Record<string, string>): string {
  const { brand } = PATH_META[path];
  const rows = Object.entries(fields)
    .filter(([, v]) => v?.trim())
    .map(([k, v]) => {
      const label = FIELD_LABELS[k] ?? k;
      const isMessage = k === "message";
      return `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#64748b;white-space:nowrap;vertical-align:top;font-size:13px;">${label}</td>
          <td style="padding:8px 12px;color:#0f172a;font-size:14px;${isMessage ? "white-space:pre-wrap;" : ""}">${v}</td>
        </tr>`;
    })
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a3a5c;padding:28px 32px;">
            <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#93c5fd;font-weight:600;">${brand}</p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:600;color:#ffffff;">New ${path} inquiry</h1>
          </td>
        </tr>

        <!-- Fields table -->
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">
              Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              · Logic Labs, Nashik
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// Plain-text fallback

function buildText(path: PathKey, fields: Record<string, string>): string {
  const lines = Object.entries(fields)
    .filter(([, v]) => v?.trim())
    .map(([k, v]) => `${FIELD_LABELS[k] ?? k}: ${v}`);
  return [`NEW ${path.toUpperCase()} INQUIRY`, "─".repeat(40), ...lines].join(
    "\n",
  );
}

// Public API─

export async function sendContactEmail(
  path: PathKey,
  fields: Record<string, string>,
): Promise<void> {
  const meta = PATH_META[path];
  const toEmail = process.env[meta.toEnvKey];

  if (!toEmail) throw new Error(`Missing env var: ${meta.toEnvKey}`);

  const from = `"${process.env.MAIL_FROM_NAME ?? "Website"}" <${process.env.MAIL_FROM_ADDRESS}>`;
  const subject = `[${path.toUpperCase()}] New inquiry from ${fields.name ?? "visitor"}`;

  await getTransporter().sendMail({
    from,
    to: toEmail,
    replyTo: fields.email,
    subject,
    html: buildHtml(path, fields),
    text: buildText(path, fields),
  });
}
