"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { MapRegion } from "@/components/InteractiveMap";

const regions = [
  {
    id: "central",
    name: "Центральный федеральный округ",
    zones: ["Тверская область", "Ярославская область", "Тульская область"]
  },
  {
    id: "northwest",
    name: "Северо-Западный федеральный округ",
    zones: ["Псковская область", "Новгородская область", "Вологодская область"]
  },
  {
    id: "volga",
    name: "Поволжье",
    zones: ["Нижегородская область", "Самарская область", "Пермский край"]
  }
];

export function MapSelector() {
  const [regionId, setRegionId] = useState(regions[0].id);
  const [zone, setZone] = useState(regions[0].zones[0]);

  const activeRegion = useMemo(
    () => regions.find((region) => region.id === regionId) ?? regions[0],
    [regionId]
  );

  return (
    <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Карта</p>
        <h3 className="mt-2 text-2xl font-semibold">Интерактивная карта России</h3>
        <p className="mt-2 text-sm text-slate-300">
          До оплаты показываем только примерные зоны. Точные точки доступны после оплаты и выдачи.
        </p>
        <div className="mt-6 h-64 rounded-2xl border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,_rgba(15,106,212,0.2),_transparent_70%)]" />
      </div>
      <div className="rounded-3xl bg-slate-900/70 p-6">
        <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Регион</label>
        <select
          value={regionId}
          onChange={(event) => {
            const nextId = event.target.value;
            setRegionId(nextId);
            const nextRegion = regions.find((region) => region.id === nextId);
            setZone(nextRegion?.zones[0] ?? "");
          }}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>

        <label className="mt-6 block text-xs uppercase tracking-[0.2em] text-slate-400">Зона</label>
        <select
          value={zone}
          onChange={(event) => setZone(event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white"
        >
          {activeRegion.zones.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
          Вы выбрали: <span className="font-semibold text-white">{zone}</span>
        </div>
      </div>
    </div>
  );
}