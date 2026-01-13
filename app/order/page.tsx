import { OrderForm } from "@/components/OrderForm";
import { Section } from "@/components/Section";

export default function OrderPage() {
  return (
    <div>
      <Section title="Оформление заказа" subtitle="Заполните форму — мы подтвердим заказ и отправим ссылку на оплату">
        <OrderForm />
      </Section>
    </div>
  );
}
