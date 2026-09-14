/** High-quality original flying friends — not copied from any other show. */
export function LivingSky() {
  return (
    <div className="living-sky" aria-hidden>
      <img src="/world/bee.jpg?v=hq1" alt="" className="sky-bee h-14 w-14 rounded-full object-cover shadow-lg sm:h-16 sm:w-16" />
      <img src="/world/bee.jpg?v=hq1" alt="" className="sky-bee h-10 w-10 rounded-full object-cover shadow-lg" />
      <img src="/world/bee.jpg?v=hq1" alt="" className="sky-bee h-12 w-12 rounded-full object-cover shadow-lg" />
      <img src="/world/butterfly.jpg?v=hq1" alt="" className="sky-butterfly h-16 w-16 rounded-full object-cover shadow-lg sm:h-20 sm:w-20" />
      <img src="/world/butterfly.jpg?v=hq1" alt="" className="sky-butterfly h-12 w-12 rounded-full object-cover shadow-lg" />
      <span className="pollen left-[12%]" />
      <span className="pollen left-[40%]" style={{ animationDelay: "3s" }} />
      <span className="pollen left-[68%]" style={{ animationDelay: "6s" }} />
      <span className="pollen left-[88%]" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
