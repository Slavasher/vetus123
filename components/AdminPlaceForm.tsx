"use client";

import { useState } from "react";

export function AdminPlaceForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Ошибка при сохранении места.");
      return;
    }

    setStatus("Место сохранено. Добавьте архивную карточку позже.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl bg-slate-900/70 p-8">
      <input
        name="name"
        placeholder="Название места"
        required
        className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
      />
      <textarea
        name="description"
        placeholder="Краткое описание"
        className="min-h-[120px] rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="latitude"
          placeholder="Широта"
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        />
        <input
          name="longitude"
          placeholder="Долгота"
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        />
      </div>
      <input
        name="regionId"
        placeholder="ID региона"
        className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
      />
      <button className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink">Сохранить</button>
      {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
    </form>
  );
}
