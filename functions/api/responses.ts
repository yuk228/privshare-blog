import { NextResponse } from "next/server";

export function NotFound() {
  return NextResponse.json({ error: "Resource Not Found" }, { status: 404 });
}

export function Unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function Forbidden() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
