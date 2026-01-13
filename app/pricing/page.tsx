import { PricingCalculator } from "@/components/PricingCalculator";
import { Section } from "@/components/Section";

const plans = [
  {
    title: "Базовый пакет",
    price: "700 ₽ / место",
    desc: "Полная архивная справка по каждому месту. Минимум 7 мест.",
    features: [
      "Структура отчета из 10 разделов",
      "PDF с водяными знаками",
      "Доступ в личном кабинете",
      "Срок выдачи 24–72 часа"
    ]
  },
  {
    title: "Премиум сопровождение",
    price: "По запросу",
    desc: "Индивидуальные исследования, расширенные архивы и сопровождение аналитика.",
    features: [
      "Персональный менеджер",
      "Дополнительные источники",
      "Фокус на сложных локациях"
    ]
  }
];

export default function PricingPage() {
  return (
    <div>
      <Section title="Тарифы и калькулятор" subtitle="Прозрачная стоимость без скрытых платежей">
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
              <p className="mt-2 text-sm text-gold">{plan.price}</p>
              <p className="mt-3 text-sm text-slate-300">{plan.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Калькулятор" subtitle="Введите количество мест и получите итоговую сумму">
        <PricingCalculator />
      </Section>
    </div>
  );
}
