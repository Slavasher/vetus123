import { Section } from "@/components/Section";

export default function OfferPage() {
  return (
    <Section title="Публичная оферта" subtitle="Краткая версия для MVP">
      <div className="rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
        <p>
          Услуга предоставляется в формате историко-краеведческого исследования. Сроки выдачи
          указаны в описании заказа. Оплата подтверждает согласие с условиями сервиса.
        </p>
      </div>
    </Section>
  );
}
