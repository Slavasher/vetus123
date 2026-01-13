import Link from "next/link";
import { MapSelector } from "@/components/MapSelector";
import { Section } from "@/components/Section";

export default function MapPage() {
  return (
    <div>
      <Section
        title="Выбор района"
        subtitle="Сначала выбираете регион, затем уточняете зону — точные точки открываются после оплаты"
      >
        <MapSelector />
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/pricing" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white">
            Перейти к тарифам
          </Link>
          <Link href="/order" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">
            Оформить заказ
          </Link>
        </div>
      </Section>
    </div>
  );
}
