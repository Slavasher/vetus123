import { Section } from "@/components/Section";

const fields = [
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

export default function PlaceCardPage() {
  return (
    <Section title="Карточка места" subtitle="Структура архивной справки">
      <div className="rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Пример структуры</p>
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <div key={field} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm font-semibold text-white">{field}</p>
              <p className="mt-2 text-xs text-slate-400">Заполняется архивным аналитиком.</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
