import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/start")({ component: StartPage });

const STEPS = [
  {
    n: "1",
    title: "You are already in the website",
    text: "The picture on the left (or above on a phone) is Fruits Crew. You do not need PowerShell for this part.",
  },
  {
    n: "2",
    title: "Open your farm",
    text: "Tap Farm. Choose a seed. Tap empty earth. Call the rain. Call the sun. Watch it really grow.",
  },
  {
    n: "3",
    title: "Tap Sing Together",
    text: "Open Sing. Tap a song. You will see the chorus and karaoke lines. These are original Fruits Crew songs.",
  },
  {
    n: "4",
    title: "Open Studio (for grown-ups)",
    text: "Scroll to the very bottom of any page. Tap Studio and launch kit. That page is your CapCut and YouTube helper.",
  },
  {
    n: "5",
    title: "Copy the YouTube words",
    text: "On Studio, find Wake Up, Little Seed. Tap Copy next to Title, then Copy next to Description. Paste those into YouTube when your film is ready.",
  },
  {
    n: "6",
    title: "Make the film in CapCut",
    text: "On a phone or computer, open the CapCut app. Follow the numbered CapCut list on the Studio page. Use only original Fruits Crew pictures and music — never another brand’s song.",
  },
  {
    n: "7",
    title: "Stay in this chat",
    text: "If the top of the screen says github.com, you have left the kids’ site. Close that tab. Come back to this Grok chat and tap the garden picture.",
  },
];

function StartPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Beginner guide</p>
      <h1 className="mt-2 font-display text-4xl">Start here</h1>
      <p className="mt-3 text-lg text-muted">
        One step at a time. Do step 1, then stop. Then do step 2.
      </p>
      <ol className="mt-8 space-y-4">
        {STEPS.map((s) => (
          <li key={s.n} className="rounded-[20px] border border-border bg-bg-elevated p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Step {s.n}</p>
            <h2 className="mt-1 font-display text-2xl">{s.title}</h2>
            <p className="mt-2 text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/farm">Open your farm</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/crew">Meet the Crew</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/studio">Open Studio</Link>
        </Button>
      </div>
    </main>
  );
}
