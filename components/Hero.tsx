export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl animate-fade-up">
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Software Engineer
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Building full-stack products
          <br />
          <span className="text-text2">&amp; intelligent systems</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text3 sm:text-lg">
          Software Engineering (Honours) graduate from Deakin University.
          Specializing in ASP.NET Core, React, cloud deployments &amp; AI
          integrations. 8+ years of building.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Case Studies →
          </a>
          <a
            href="#academic-archive"
            className="btn-ghost"
          >
            Academic Archive ↗
          </a>
        </div>

        {/* quick stats */}
        <div className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-6 text-center">
          {[
            { n: "37+", l: "Technologies" },
            { n: "8+", l: "Years Building" },
            { n: "∞", l: "Projects" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold text-text">{s.n}</div>
              <div className="mt-1 text-xs text-text3">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
