import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const API_URL = process.env.API_URL || "";
  const res = await fetch(`${API_URL}?type=all&id=${params.id}`);

  if (!res.ok) {
    return NextResponse.error();
  }

  const data = await res.json();
  return NextResponse.json(data);
}