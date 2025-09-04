import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { auth } from "@/auth";
import { NotFound, Unauthorized } from "@/functions/api/responses";
import { currentUser } from "@/functions/users/current-user";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return Unauthorized();
  }
  const user = await currentUser({ sessionUser: session.user });
  if (!user) {
    return NotFound();
  }
  return NextResponse.json({ user });
}
