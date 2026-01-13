"use client";

import { useMemo, useState } from "react";

const PRICE_PER_PLACE = 700;
const MIN_PLACES = 7;

export function PricingCalculator() {
  const [count, setCount] = useState<number>(MIN_PLACES);

  const total = useMemo(() => {
    const normalized = Math.max(count, MIN_PLACES);
    return normalized * PRICE_PER_PLACE;
  }, [count]);

  return (
    <div className="grid gap-6 rounded-3xl bg-slate-900/70 p-8 shadow-lg shadow-black/30 md:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Калькулятор</p>
        <h3 className="text-2xl font-semibold text-white">Рассчитайте стоимость подборки</h3>
        <p className="text-sm text-slate-300">
          700 ₽ за место. Минимальный заказ — 7 мест. Срок выдачи — 24–72 часа.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="number"
            min={MIN_PLACES}
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
            className="w-28 rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
          />
          <span className="text-sm text-slate-400">мест</span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between rounded-2xl bg-slate-950/80 p-6">
        <div>
          <p className="text-sm text-slate-400">Итого</p>
          <p className="text-3xl font-semibold text-gold">{total.toLocaleString("ru-RU")} ₽</p>
        </div>
        <p className="text-xs text-slate-500">Сумма без учета комиссии платежной системы.</p>
      </div>
    </div>
  );
}
