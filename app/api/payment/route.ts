import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  return NextResponse.json({
    paymentId: `pay_${Date.now()}`,
    status: "pending",
    amount: payload.amount ?? 0,
    provider: "stub"
  });
}
