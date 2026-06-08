export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-6">
        TexWebSec
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mb-8">
        Veteran‑owned web development and cybersecurity services for small ethnic‑owned businesses.
        We build secure, AI‑powered websites that protect your data and grow your brand.
      </p>
      <a
        href="/contact"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
      >
        Get Started
      </a>
    </section>
  );
}
