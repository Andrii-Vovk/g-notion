import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const access_token = session?.accessToken;

  if (!access_token) {
    return NextResponse.json(
      {
        message: "Not authorized to get google calendar data",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const oauth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

    oauth2Client.setCredentials({
      access_token,
    });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const calendarList = await calendar.calendarList.list();
    return NextResponse.json({ hello: calendarList });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error getting google calendar data",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
