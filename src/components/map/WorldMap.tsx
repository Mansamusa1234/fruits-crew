import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { mapRegions, plantsInRegion } from "@/lib/content/plants";
import { cn } from "@/lib/cn";

const PINS: { id: string; cx: number; cy: number }[] = [
  { id: "caribbean", cx: 28, cy: 48 },
  { id: "west-africa", cx: 48, cy: 52 },
  { id: "horn-of-africa", cx: 58, cy: 50 },
  { id: "south-asia", cx: 68, cy: 44 },
  { id: "southeast-asia", cx: 78, cy: 50 },
  { id: "east-asia", cx: 82, cy: 38 },
  { id: "pacific", cx: 88, cy: 58 },
  { id: "amazon", cx: 32, cy: 62 },
  { id: "andes", cx: 30, cy: 70 },
  { id: "mesoamerica", cx: 20, cy: 48 },
  { id: "north-america", cx: 22, cy: 36 },
  { id: "mediterranean", cx: 50, cy: 36 },
  { id: "middle-east", cx: 58, cy: 40 },
  { id: "britain", cx: 47, cy: 32 },
  { id: "central-asia", cx: 66, cy: 34 },
  { id: "southern-africa", cx: 52, cy: 68 },
  { id: "australia", cx: 86, cy: 68 },
];

export function WorldMap() {
  const [id, setId] = useState("caribbean");
  const region = mapRegions.find((r) => r.id === id) ?? mapRegions[0];
  const list = useMemo(() => plantsInRegion(id), [id]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className="rounded-[28px] border border-border bg-bg-elevated p-4 shadow-soft">
        <svg viewBox="0 0 100 80" className="h-auto w-full" role="img" aria-label="World map of plant origins">
          <rect width="100" height="80" rx="4" fill="#eae3d4" />
          <ellipse cx="22" cy="38" rx="14" ry="12" fill="#c8d4c4" />
          <ellipse cx="32" cy="60" rx="10" ry="14" fill="#c8d4c4" />
          <ellipse cx="50" cy="38" rx="12" ry="16" fill="#c8d4c4" />
          <ellipse cx="68" cy="40" rx="16" ry="14" fill="#c8d4c4" />
          <ellipse cx="84" cy="58" rx="8" ry="6" fill="#c8d4c4" />
          {PINS.map((pin) => (
            <g key={pin.id}>
              <circle
                cx={pin.cx}
                cy={pin.cy}
                r={id === pin.id ? 3.2 : 2.2}
                fill={id === pin.id ? "#2f5d3a" : "#5c4634"}
                className="cursor-pointer"
                onClick={() => setId(pin.id)}
              />
            </g>
          ))}
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">
          {mapRegions.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setId(r.id)}
              className={cn(
                "min-h-10 rounded-full border px-3 text-sm",
                id === r.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg-subtle",
              )}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-border bg-bg-elevated p-5">
        <h2 className="font-display text-2xl">{region.name}</h2>
        <p className="mt-2 text-muted">{region.blurb}</p>
        <ul className="mt-4 space-y-2">
          {list.length === 0 ? <li className="text-sm text-subtle">More plants coming for this region.</li> : null}
          {list.map((p) => (
            <li key={p.slug}>
              <Link to="/plants/$slug" params={{ slug: p.slug }} className="font-medium text-primary hover:underline">
                {p.commonName}
              </Link>
              <p className="text-sm text-muted">{p.botanicalOrigin}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
