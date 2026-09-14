import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export function MangoCount() {
  const [target, setTarget] = useState(4);
  const [picked, setPicked] = useState<number[]>([]);
  const mangoes = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);
  const correct = picked.length === target;

  return (
    <section className="rounded-[28px] border border-border bg-bg-elevated p-5 shadow-soft">
      <h2 className="font-display text-2xl">Count the mangoes</h2>
      <p className="mt-1 text-muted">Tap exactly {target}. Pretend fruit only.</p>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {mangoes.map((n) => {
          const on = picked.includes(n);
          return (
            <button
              key={n}
              type="button"
              aria-pressed={on}
              aria-label={`Mango ${n + 1}`}
              onClick={() =>
                setPicked((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]))
              }
              className="aspect-square min-h-11 rounded-[20px] border border-border bg-bg-subtle text-sm font-semibold hover:bg-bg"
              style={{
                boxShadow: on ? "inset 0 0 0 3px #2f5d3a" : undefined,
                background: on ? "#f0b46a" : undefined,
              }}
            >
              Mango
            </button>
          );
        })}
      </div>
      <p className="mt-4 font-medium tabular-nums" aria-live="polite">
        You chose {picked.length}. {correct ? "Yes — that is the number." : "Keep counting."}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[3, 4, 5, 8].map((n) => (
          <Button
            key={n}
            variant={n === target ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setTarget(n);
              setPicked([]);
            }}
          >
            Find {n}
          </Button>
        ))}
      </div>
    </section>
  );
}
