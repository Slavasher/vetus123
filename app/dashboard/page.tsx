import { OrderList } from "@/components/OrderList";
import { Section } from "@/components/Section";

export default function DashboardPage() {
  return (
    <div>
      <Section title="Личный кабинет" subtitle="История заказов и доступ к архивным карточкам">
        <div className="mb-6 grid gap-4 rounded-3xl bg-slate-900/70 p-6 text-sm text-slate-300">
          <p>Статус заказа обновляется автоматически после оплаты.</p>
          <p>PDF доступен ограниченное количество раз. Файлы персонализированы водяным знаком.</p>
        </div>
        <OrderList />
      </Section>
    </div>
  );
}
