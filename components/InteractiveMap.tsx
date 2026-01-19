"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry, GeoJsonObject } from "geojson";

export type MapRegion = {
  id: string;
  name: string;
  feature: Feature<Geometry, { id: string; name: string }>;
};

type InteractiveMapProps = {
  regions: MapRegion[];
  selectedRegionId: string;
  onSelect: (regionId: string) => void;
};

export function InteractiveMap({ regions, selectedRegionId, onSelect }: InteractiveMapProps) {
  const collection: FeatureCollection = {
    type: "FeatureCollection",
    features: regions.map((region) => region.feature)
  };

  return (
    <div className="h-72 w-full overflow-hidden rounded-2xl border border-white/10">
      <MapContainer
        center={[56, 40]}
        zoom={3}
        className="h-full w-full"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={collection as GeoJsonObject}
          style={(feature) => {
            const id = (feature?.properties as { id?: string })?.id;
            const active = id === selectedRegionId;
            return {
              color: active ? "#f6d58f" : "#1e293b",
              weight: active ? 2.5 : 1.5,
              fillColor: active ? "#0f6ad4" : "#111827",
              fillOpacity: active ? 0.65 : 0.45
            };
          }}
          eventHandlers={{
            click: (event) => {
              const id = (event.propagatedFrom?.feature?.properties as { id?: string })?.id;
              if (id) {
                onSelect(id);
              }
            }
          }}
        />
      </MapContainer>
    </div>
  );
}
