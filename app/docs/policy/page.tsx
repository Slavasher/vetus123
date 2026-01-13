import { Section } from "@/components/Section";

export default function PolicyPage() {
  return (
    <Section title="Политика обработки данных" subtitle="Краткое описание для MVP">
      <div className="rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
        <p>
          Мы собираем контактные данные для исполнения заказа и выдачи архивных материалов. Данные
          не передаются третьим лицам без необходимости оказания услуги и соблюдения закона.
        </p>
      </div>
    </Section>
  );
}
