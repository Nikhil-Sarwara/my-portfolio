const projects = [
  {
    title: "BibVault — Full-Stack Internship",
    desc: "Remote internship building production features with ASP.NET Core, MongoDB & Jira Agile. Shipped real features used by the team.",
    tags: ["ASP.NET Core", "MongoDB", "Jira", "Agile"],
    color: "from-blue-500/10 to-transparent",
    span: "col-span-2 row-span-2",
    links: [
      { label: "GitHub", href: "https://github.com/Nikhil-Sarwara" },
    ],
  },
  {
    title: "MDPI Research Publication",
    desc: "Sensor Cross-Validation paper published in MDPI Electronics. Novel approach to GPS spoofing detection in autonomous systems.",
    tags: ["Research", "GPS Spoofing", "ML", "PX4"],
    color: "from-purple-500/10 to-transparent",
    span: "col-span-2 row-span-1",
    links: [
      { label: "Paper ↗", href: "https://github.com/Nikhil-Sarwara/gps_spoofing" },
    ],
  },
  {
    title: "Queuti — AI Platform",
    desc: "Job application tracker + market intelligence platform with browser-based ML. Next.js, MongoDB, real-time analytics.",
    tags: ["Next.js", "MongoDB", "ML", "Firebase"],
    color: "from-green-500/10 to-transparent",
    span: "col-span-1 row-span-1",
    links: [
      { label: "GitHub ↗", href: "https://github.com/Nikhil-Sarwara/queuti" },
    ],
  },
  {
    title: "Cloud Infra & DevOps",
    desc: "Deployment architecture across Vercel, Firebase & MongoDB Atlas. CI/CD pipelines, monitoring & scaling.",
    tags: ["Vercel", "Firebase", "Docker", "AWS"],
    color: "from-amber-500/10 to-transparent",
    span: "col-span-1 row-span-1",
    links: [
      { label: "Tool Hord ↗", href: "https://tool-hord.vercel.app" },
    ],
  },
];

export default function BentoProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
        Featured Work
      </p>
      <h2 className="mb-12 text-3xl font-bold tracking-tight">
        Case Studies
      </h2>

      <div className="bento-grid">
        {projects.map((p) => (
          <div key={p.title} className={`bento-card ${p.span} flex flex-col p-6`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.color} pointer-events-none rounded-[1rem]`}
            />
            <div className="relative z-10 flex flex-1 flex-col">
              <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text3">
                {p.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-accent transition-colors hover:text-accent2"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
