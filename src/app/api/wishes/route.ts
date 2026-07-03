import { NextRequest, NextResponse } from "next/server";
import { addWish, getWishes } from "@/lib/sheets";

export async function GET() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_CREDS) {
    return NextResponse.json(
      { wishes: [], message: "Google Sheets not configured" },
      { status: 200 }
    );
  }

  try {
    const wishes = await getWishes();
    return NextResponse.json({ wishes });
  } catch (error) {
    console.error("Failed to fetch wishes:", error);
    return NextResponse.json({ error: "Failed to fetch wishes" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_CREDS) {
    return NextResponse.json(
      { message: "Google Sheets not configured" },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, message, attendance } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    // Basic XSS sanitization
    const sanitizedName = name.replace(/[<>]/g, "").slice(0, 100);
    const sanitizedMessage = message.replace(/[<>]/g, "").slice(0, 1000);
    const sanitizedAttendance = (attendance || "").replace(/[<>]/g, "").slice(0, 50);

    const wish = await addWish(sanitizedName, sanitizedMessage, sanitizedAttendance);
    return NextResponse.json({ wish }, { status: 201 });
  } catch (error) {
    console.error("Failed to add wish:", error);
    return NextResponse.json({ error: "Failed to add wish" }, { status: 500 });
  }
}
