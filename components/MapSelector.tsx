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

const mapRegions: MapRegion[] = [
  {
    id: "northwest",
    name: "Северо-Западный федеральный округ",
    feature: {
      type: "Feature",
      properties: { id: "northwest", name: "Северо-Западный федеральный округ" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [25, 60],
            [40, 60],
            [45, 66],
            [38, 70],
            [28, 68],
            [25, 60]
          ]
        ]
      }
    }
  },
  {
    id: "central",
    name: "Центральный федеральный округ",
    feature: {
      type: "Feature",
      properties: { id: "central", name: "Центральный федеральный округ" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [36, 52],
            [46, 52],
            [50, 56],
            [44, 59],
            [36, 57],
            [36, 52]
          ]
        ]
      }
    }
  },
  {
    id: "volga",
    name: "Поволжье",
    feature: {
      type: "Feature",
      properties: { id: "volga", name: "Поволжье" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [46, 50],
            [58, 50],
            [62, 54],
            [54, 58],
            [46, 55],
            [46, 50]
          ]
        ]
      }
    }
  }
];

const InteractiveMap = dynamic(
  () => import("@/components/InteractiveMap").then((mod) => mod.InteractiveMap),
  { ssr: false }
);

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
          Карта похожа на привычные сервисы: есть масштабирование и перемещение. Нажмите на
          выделенную область — мы подсветим выбранный округ и предложим зоны. Точные точки доступны
          после оплаты и выдачи.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <InteractiveMap
            regions={mapRegions}
            selectedRegionId={regionId}
            onSelect={(nextId) => {
              setRegionId(nextId);
              const nextRegion = regions.find((item) => item.id === nextId);
              setZone(nextRegion?.zones[0] ?? "");
            }}
          />
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
