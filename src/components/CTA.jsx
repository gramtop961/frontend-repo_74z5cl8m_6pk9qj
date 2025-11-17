import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="pb-24 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-4 border-black bg-gradient-to-br from-neutral-900 via-black to-neutral-800 p-8 text-white shadow-[12px_12px_0_#000] sm:p-12">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Start hiring with Hireshub</h3>
              <p className="mt-2 max-w-prose text-neutral-300">Spin up your first role in minutes. Bring your questions or use our library. Invite candidates instantly.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-yellow-300 px-5 py-3 text-base font-extrabold text-black shadow-[6px_6px_0_#fff] transition hover:bg-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#fff]">
                Create a free account
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-xl border-2 border-white bg-transparent px-5 py-3 text-base font-extrabold shadow-[6px_6px_0_#fff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#fff]">Talk to sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
