import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="rounded-[20px] border border-border bg-bg-elevated p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-subtle">{label}</p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={async () => {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap font-sans text-sm">{text}</pre>
    </div>
  );
}
