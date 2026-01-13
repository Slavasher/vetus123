import { NextResponse } from "next/server";

const regions = [
  { id: "central", name: "Центральный федеральный округ" },
  { id: "northwest", name: "Северо-Западный федеральный округ" },
  { id: "volga", name: "Поволжье" }
];

export async function GET() {
  return NextResponse.json({ regions });
}
