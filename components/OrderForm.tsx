"use client";

import { useMemo, useState } from "react";

const PRICE_PER_PLACE = 700;
const MIN_PLACES = 7;

export function OrderForm() {
  const [placesCount, setPlacesCount] = useState(MIN_PLACES);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const total = useMemo(() => {
    const normalized = Math.max(placesCount, MIN_PLACES);
    return normalized * PRICE_PER_PLACE;
  }, [placesCount]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      regionId: formData.get("regionId"),
      placesCount,
      contactName: formData.get("contactName"),
      contactEmail: formData.get("contactEmail"),
      contactPhone: formData.get("contactPhone")
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Не удалось создать заказ. Проверьте данные.");
      setLoading(false);
      return;
    }

    const data = await response.json();
    setStatus(`Заказ №${data.id} создан. Статус оплаты: ожидание.`);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 rounded-3xl bg-slate-900/70 p-8">
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Регион</label>
        <select
          name="regionId"
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
          required
        >
          <option value="central">Центральный ФО</option>
          <option value="northwest">Северо-Западный ФО</option>
          <option value="volga">Поволжье</option>
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Количество мест</label>
          <input
            type="number"
            min={MIN_PLACES}
            value={placesCount}
            onChange={(event) => setPlacesCount(Number(event.target.value))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
          Итого: <span className="font-semibold text-gold">{total.toLocaleString("ru-RU")} ₽</span>
          <p className="text-xs text-slate-500">Минимум 7 мест.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="contactName"
          placeholder="Имя"
          required
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        />
        <input
          name="contactEmail"
          type="email"
          placeholder="Email"
          required
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        />
        <input
          name="contactPhone"
          placeholder="Телефон (опционально)"
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Создаем заказ..." : "Оформить заказ"}
      </button>
      {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
    </form>
  );
}
