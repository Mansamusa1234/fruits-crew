/** Original flying friends — not copied from any other show. */
export function LivingSky() {
  return (
    <div className="living-sky" aria-hidden>
      <Bee className="sky-bee left-0 top-8" />
      <Bee className="sky-bee" />
      <Bee className="sky-bee" />
      <Butterfly className="sky-butterfly" />
      <Butterfly className="sky-butterfly" pink />
      <span className="pollen left-[12%]" />
      <span className="pollen left-[40%]" style={{ animationDelay: "3s" }} />
      <span className="pollen left-[68%]" style={{ animationDelay: "6s" }} />
      <span className="pollen left-[88%]" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}

function Bee({ className }: { className?: string }) {
  return (
    <svg className={className} width="42" height="28" viewBox="0 0 42 28" fill="none">
      <ellipse cx="22" cy="16" rx="12" ry="8" fill="#F0C84A" />
      <rect x="16" y="9" width="4" height="14" fill="#2C2416" opacity="0.85" />
      <rect x="23" y="9" width="4" height="14" fill="#2C2416" opacity="0.85" />
      <circle cx="32" cy="14" r="5" fill="#2C2416" />
      <circle cx="34" cy="13" r="1.4" fill="white" />
      <ellipse cx="14" cy="8" rx="8" ry="5" fill="white" opacity="0.85">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1; 0.4 1; 1 1"
          dur="0.28s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}

function Butterfly({ className, pink }: { className?: string; pink?: boolean }) {
  const c = pink ? "#E11D74" : "#00B4D8";
  return (
    <svg className={className} width="48" height="36" viewBox="0 0 48 36" fill="none">
      <ellipse cx="14" cy="14" rx="12" ry="10" fill={c} opacity="0.92">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;0.55;1"
          dur="0.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="34" cy="14" rx="12" ry="10" fill={c} opacity="0.92">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;0.55;1"
          dur="0.4s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      <rect x="22" y="8" width="4" height="18" rx="2" fill="#2C2416" />
      <circle cx="24" cy="7" r="3" fill="#2C2416" />
    </svg>
  );
}
