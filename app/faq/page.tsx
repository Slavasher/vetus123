import { Section } from "@/components/Section";

const faq = [
  {
    q: "Можно ли выбрать конкретные точки до оплаты?",
    a: "Нет, до оплаты доступны только примерные зоны и регион. Точные координаты открываются после подтверждения заказа."
  },
  {
    q: "Как быстро приходит результат?",
    a: "Стандартный срок — 24–72 часа в зависимости от объема и сложности архивной проверки."
  },
  {
    q: "Можно ли заказать повторно?",
    a: "Да, повторный заказ оформляется через личный кабинет с сохранением истории и скидок."
  }
];

export default function FaqPage() {
  return (
    <Section title="FAQ и поддержка" subtitle="Ответы на частые вопросы">
      <div className="grid gap-4">
        {faq.map((item) => (
          <div key={item.q} className="rounded-3xl bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">{item.q}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.a}</p>
          </div>
        ))}
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
          Напишите нам: support@klad.ru или в Telegram @klad_support
        </div>
      </div>
    </Section>
  );
}
