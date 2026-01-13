"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;
  status: string;
  placesCount: number;
  totalPrice: number;
  createdAt: string;
};

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data.orders ?? []))
      .catch(() => setOrders([]));
  }, []);

  return (
    <div className="space-y-4">
      {orders.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-300">
          Пока нет заказов. Создайте первый заказ из калькулятора.
        </div>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Заказ {order.id}</p>
                <p className="text-lg font-semibold text-white">{order.placesCount} мест</p>
                <p className="text-sm text-slate-400">Статус: {order.status}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400">Сумма</p>
                <p className="text-xl font-semibold text-gold">{order.totalPrice.toLocaleString("ru-RU")} ₽</p>
                <p className="text-xs text-slate-500">
                  {new Date(order.createdAt).toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
