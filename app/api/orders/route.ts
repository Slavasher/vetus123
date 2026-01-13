import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PRICE_PER_PLACE = 700;
const MIN_PLACES = 7;

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json({ orders });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const placesCount = Math.max(Number(payload.placesCount ?? 0), MIN_PLACES);

  if (!payload.contactName || !payload.contactEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const totalPrice = placesCount * PRICE_PER_PLACE;

  const order = await prisma.order.create({
    data: {
      regionId: payload.regionId ? String(payload.regionId) : null,
      placesCount,
      totalPrice,
      status: "pending_payment",
      contactName: String(payload.contactName),
      contactEmail: String(payload.contactEmail),
      contactPhone: payload.contactPhone ? String(payload.contactPhone) : null
    }
  });

  return NextResponse.json({ id: order.id, status: order.status, totalPrice });
}
