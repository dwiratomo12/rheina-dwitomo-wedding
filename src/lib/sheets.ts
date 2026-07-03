import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "";
const SHEET_NAME = "Wishes";

function getAuthClient() {
  const creds = process.env.GOOGLE_SERVICE_ACCOUNT_CREDS;
  if (!creds) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_CREDS");
  }
  const key = JSON.parse(
    Buffer.from(creds, "base64").toString("utf-8")
  );
  return new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  attendance: string;
  createdAt: string;
}

export async function getWishes(): Promise<Wish[]> {
  try {
    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
    });

    const rows = response.data.values || [];
    return rows.slice(1).map((row, i) => ({
      id: row[0] || String(i),
      name: row[1] || "",
      message: row[2] || "",
      attendance: row[3] || "",
      createdAt: row[4] || "",
    }));
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return [];
  }
}

export async function addWish(
  name: string,
  message: string,
  attendance: string
): Promise<Wish> {
  const auth = getAuthClient();
  const sheets = google.sheets({ version: "v4", auth });

  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const createdAt = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[id, name, message, attendance, createdAt]],
    },
  });

  return { id, name, message, attendance, createdAt };
}

export async function ensureSheetExists(): Promise<boolean> {
  try {
    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === SHEET_NAME
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: { title: SHEET_NAME },
              },
            },
          ],
        },
      });

      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:E1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [["ID", "Name", "Message", "Attendance", "Created At"]],
        },
      });
    }

    return true;
  } catch (error) {
    console.error("Error ensuring sheet exists:", error);
    return false;
  }
}
