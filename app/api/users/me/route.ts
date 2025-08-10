import { NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,

      },
      select: {
        uuid: true,
        name: true,
        imageUrl: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json({ user });
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}