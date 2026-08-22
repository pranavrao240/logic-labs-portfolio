function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const fields = body.fields || {};
    const path = body.path || "unknown";

    // Monthly tab: "May 2026", "June 2026" etc
    const now = new Date();
    const tabName = Utilities.formatDate(
      now,
      Session.getScriptTimeZone(),
      "MMMM yyyy",
    );
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      sheet.appendRow(["Timestamp", "Path", "Form Data"]);
      sheet
        .getRange(1, 1, 1, 3)
        .setFontWeight("bold")
        .setBackground("#0f2744")
        .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 160);
      sheet.setColumnWidth(2, 100);
      sheet.setColumnWidth(3, 600);
    }

    const LABELS = {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company & Role",
      projectType: "Project Type",
      orderType: "Order Type",
      partnershipType: "Partnership Type",
      material: "Material",
      filamentType: "Filament Type",
      quantity: "Quantity",
      colorFinish: "Colour / Finish",
      timeline: "Timeline",
      deliveryLocation: "Delivery Location",
      region: "Region / Market",
      volume: "Volume / Scope",
      message: "Message",
    };

    const formData = Object.entries(fields)
      .filter(([, v]) => v && String(v).trim())
      .map(([k, v]) => (LABELS[k] || k) + ": " + v)
      .join("\n");

    sheet.appendRow([now, path, formData]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.message }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
