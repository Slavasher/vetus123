import { Section } from "@/components/Section";

export default function ConfidentialityPage() {
  return (
    <Section title="Конфиденциальность" subtitle="Контроль доступа и защита контента">
      <div className="rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
        <p>
          Материалы выдаются в личном кабинете, доступны по персональной ссылке и защищены водяным
          знаком. Скачивание ограничено.
        </p>
      </div>
    </Section>
  );
}
