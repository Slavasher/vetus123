import Link from "next/link";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Section } from "@/components/Section";

const valueProps = [
  {
    title: "Архивная точность",
    text: "Работаем с закрытыми фондами и верифицируем источники. Вы получаете справку с прозрачной структурой."
  },
  {
    title: "Юридическая чистота",
    text: "Формат — историко-краеведческое исследование. Никаких инструкций к незаконным действиям."
  },
  {
    title: "Контроль выдачи",
    text: "Пакет мест доступен в личном кабинете + PDF с водяными знаками и лимитами выгрузки."
  }
];

const reportStructure = [
  "Происхождение названия",
  "Исторический контекст",
  "Год основания/упоминания",
  "Владельцы земли",
  "Старые дороги/ярмарки/скупщики",
  "Занятия жителей",
  "Промышленные объекты",
  "Социальная и духовная жизнь",
  "Церковный приход",
  "Советы по поиску"
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Премиальный архивный сервис
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Закажите подборку исторических мест по архивам России — без раскрытия точных точек до оплаты
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              Мы подбираем места на основе архивных фондов и краеведческих источников. Каждое место
              сопровождается полной справкой, а выдача занимает 24–72 часа.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/map"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
              >
                Выбрать район на карте
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                Как это работает
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span>700 ₽ за место</span>
              <span>Минимум 7 мест</span>
              <span>Формат: кабинет + PDF + Telegram (опц.)</span>
            </div>
          </div>
          <div className="gradient-panel rounded-3xl p-8 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Что внутри пакета</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {reportStructure.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              До оплаты отображаем только регион и зону без точных координат.
            </p>
          </div>
        </div>
      </section>

      <Section title="Почему нам доверяют" subtitle="Архивная экспертиза, прозрачные процессы и контроль выдачи">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Калькулятор стоимости"
        subtitle="Подберите количество мест и получите итоговую стоимость"
      >
        <PricingCalculator />
      </Section>

      <Section title="Сценарий клиента" subtitle="Простой путь от выбора региона до выдачи">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "Выбираете регион на карте",
            "Рассчитываете стоимость",
            "Оплачиваете и подтверждаете заказ",
            "Получаете архивные карточки"
          ].map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs uppercase text-slate-400">Шаг {index + 1}</p>
              <p className="mt-3 text-sm text-slate-200">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
