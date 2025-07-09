import { connectMongodb } from "@/app/lib/mongodb";
import Notification from "@/app/models/Notification";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectMongodb();
    const newNotification = await Notification.create(body);
    return NextResponse.json(newNotification, { status: 201 });
  } catch (error) {
    console.error("Error creating notification:", error);
    return NextResponse.json(
      { message: "Failed to create notification", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongodb();
    const notifications = await Notification.find().sort({ createdAt: -1 });
    return NextResponse.json(notifications, { status: 200 });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { message: "Failed to fetch notifications", error: error.message },
      { status: 500 }
    );
  }
}