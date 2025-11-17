import Spline from '@splinetool/react-spline';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="py-10">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider shadow-[4px_4px_0_#000]">New • AI Interview</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Hire faster with AI-powered interviews
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium text-neutral-700">
              Hireshub helps teams screen candidates with async video and voice interviews, powered by a reliable AI assessor. Reduce time-to-hire while keeping it human.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-lime-300 px-5 py-3 text-base font-extrabold shadow-[6px_6px_0_#000] transition hover:bg-lime-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-5 py-3 text-base font-extrabold shadow-[6px_6px_0_#000] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]">
                <Play className="h-4 w-4" />
                Watch demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-neutral-700">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> GDPR-ready
              </div>
              <div>99.9% uptime</div>
              <div>14-day trial</div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-3xl border-4 border-black bg-white shadow-[12px_12px_0_#000]">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(1000px_600px_at_30%_80%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(900px_500px_at_50%_50%,rgba(253,186,116,0.12),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
