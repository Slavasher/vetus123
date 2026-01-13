import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { prisma } from "@/lib/prisma";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  const order = await prisma.order.findUnique({
    where: { id: params.id }
  });

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText("Подборка архивных мест", { x: 50, y: 780, size: 20, font, color: rgb(0, 0, 0) });
  page.drawText(`Заказ: ${order.id}`, { x: 50, y: 750, size: 12, font });
  page.drawText(`Мест: ${order.placesCount}`, { x: 50, y: 730, size: 12, font });
  page.drawText("Водяной знак: персональный доступ", { x: 50, y: 60, size: 10, font });

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=order-${order.id}.pdf`
    }
  });
}
