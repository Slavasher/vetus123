import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  if (!payload.name || !payload.regionId) {
    return NextResponse.json({ error: "Name and regionId are required" }, { status: 400 });
  }

  const place = await prisma.place.create({
    data: {
      name: String(payload.name),
      description: payload.description ? String(payload.description) : null,
      latitude: payload.latitude ? Number(payload.latitude) : null,
      longitude: payload.longitude ? Number(payload.longitude) : null,
      regionId: String(payload.regionId)
    }
  });

  return NextResponse.json({ id: place.id });
}
