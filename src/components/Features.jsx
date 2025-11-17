import { Brain, Video, MessageSquare, Clock3, Gauge, Workflow } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive AI assessor",
    desc: "Objective scoring and structured feedback across roles and seniorities.",
    color: "from-purple-300 to-purple-200",
  },
  {
    icon: Video,
    title: "Async video & voice",
    desc: "Candidates interview on their time with camera or audio-only modes.",
    color: "from-blue-300 to-blue-200",
  },
  {
    icon: MessageSquare,
    title: "Real-time prompts",
    desc: "Guided questions, follow-ups, and clarifications to go deeper.",
    color: "from-amber-300 to-amber-200",
  },
  {
    icon: Clock3,
    title: "Faster time-to-hire",
    desc: "Cut screening cycles from weeks to days with batch scheduling.",
    color: "from-lime-300 to-lime-200",
  },
  {
    icon: Gauge,
    title: "Bias-aware",
    desc: "Configs to mitigate bias and calibrate to your rubric.",
    color: "from-pink-300 to-pink-200",
  },
  {
    icon: Workflow,
    title: "ATS friendly",
    desc: "Exports, webhooks, and APIs to plug into your stack.",
    color: "from-cyan-300 to-cyan-200",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Built for modern hiring</h2>
          <p className="max-w-xl text-neutral-700">Neobrutalist blocks, clean lines, and colorful accents for a youthful feel — without sacrificing clarity.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-3xl border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000] transition">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-gradient-to-br ${f.color} shadow-[4px_4px_0_#000]`}>
                <f.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold">{f.title}</h3>
              <p className="mt-2 text-neutral-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
