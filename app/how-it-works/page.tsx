import { Section } from "@/components/Section";

const steps = [
  {
    title: "Выбор района",
    text: "Вы отмечаете регион и зону интереса на карте. До оплаты показываем только примерные границы."
  },
  {
    title: "Оформление заказа",
    text: "Указываете количество мест (минимум 7), контактные данные и предпочитаемый формат выдачи."
  },
  {
    title: "Оплата",
    text: "После подтверждения заказа происходит оплата через сертифицированный российский платежный сервис."
  },
  {
    title: "Выдача",
    text: "Через 24–72 часа в личном кабинете появятся карточки и PDF-отчет с водяными знаками."
  }
];

const safety = [
  "Мы предоставляем историко-краеведческие исследования, без инструкций к незаконным действиям.",
  "Точные координаты раскрываются только после оплаты и проверки заказа.",
  "Материалы защищены лимитами выгрузок и персональными водяными знаками."
];

export default function HowItWorksPage() {
  return (
    <div>
      <Section
        title="Как это работает"
        subtitle="Сервис подбора архивных мест — структурированный и прозрачный процесс"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((item) => (
            <div key={item.title} className="rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Контроль рисков и репутации" subtitle="Безопасный формат выдачи и соответствие закону">
        <ul className="space-y-3 rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
          {safety.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
