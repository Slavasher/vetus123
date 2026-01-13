import { AdminPlaceForm } from "@/components/AdminPlaceForm";
import { Section } from "@/components/Section";

export default function AdminPage() {
  return (
    <div>
      <Section title="Админ-панель" subtitle="Управление архивными местами и выдачей">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <AdminPlaceForm />
          <div className="rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
            <h3 className="text-lg font-semibold text-white">Что делать дальше</h3>
            <ul className="mt-3 space-y-2">
              <li>• Создайте место и привяжите координаты.</li>
              <li>• Загрузите архивные документы и медиа.</li>
              <li>• Назначьте место к заказу и откройте доступ клиенту.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
