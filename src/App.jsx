import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(900px_500px_at_80%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(1000px_700px_at_50%_90%,rgba(253,186,116,0.1),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000]">
            <p className="text-center text-sm font-bold">© {new Date().getFullYear()} Hireshub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
