import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    console.log("Contact form submission:", body);

    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
