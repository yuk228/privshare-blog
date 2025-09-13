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

export function Created(data: any) {
  return NextResponse.json(data, { status: 201 });
}

export function Updated(data: any) {
  return NextResponse.json(data, { status: 200 });
}

export function Ok(data?: any) {
  return NextResponse.json(data, { status: 200 });
}

export function UnprocessableEntity() {
  return NextResponse.json({ error: "Unprocessable Entity" }, { status: 422 });
}

export function InternalServerError() {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
