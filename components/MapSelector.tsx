"use client";

import { useMemo, useState } from "react";

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

const mapRegions = [
  {
    id: "northwest",
    name: "Северо-Запад",
    points: "40,30 140,30 160,80 120,120 40,90"
  },
  {
    id: "central",
    name: "Центр",
    points: "150,120 240,90 300,120 270,190 170,190"
  },
  {
    id: "volga",
    name: "Поволжье",
    points: "310,130 420,150 460,220 360,260 290,200"
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
          Нажмите на область на карте — мы подсветим выбранный федеральный округ и предложим зоны.
          Точные точки доступны после оплаты и выдачи.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <svg viewBox="0 0 520 320" className="h-64 w-full">
            <rect width="520" height="320" rx="16" fill="#0b1220" />
            {mapRegions.map((region) => {
              const active = region.id === regionId;
              return (
                <g key={region.id}>
                  <polygon
                    points={region.points}
                    onClick={() => {
                      setRegionId(region.id);
                      const nextRegion = regions.find((item) => item.id === region.id);
                      setZone(nextRegion?.zones[0] ?? "");
                    }}
                    className={`cursor-pointer transition ${
                      active ? "fill-accent/80" : "fill-slate-800/80"
                    }`}
                    stroke={active ? "#f6d58f" : "#1e293b"}
                    strokeWidth="2"
                  />
                  <text
                    x={region.points.split(" ")[0].split(",")[0]}
                    y={Number(region.points.split(" ")[0].split(",")[1]) + 20}
                    fontSize="12"
                    fill={active ? "#f8e3b7" : "#94a3b8"}
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
            {mapRegions.map((region) => (
              <button
                key={region.id}
                onClick={() => {
                  setRegionId(region.id);
                  const nextRegion = regions.find((item) => item.id === region.id);
                  setZone(nextRegion?.zones[0] ?? "");
                }}
                className={`rounded-full border px-3 py-1 transition ${
                  region.id === regionId
                    ? "border-gold text-gold"
                    : "border-white/10 text-slate-400 hover:text-white"
                }`}
                type="button"
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
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
