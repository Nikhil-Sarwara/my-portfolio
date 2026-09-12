const experience = [
  {
    period: "2018",
    title: "Robotics Developer",
    org: "Kidobotics",
    desc: 'Built "Victory" — a bomb-disposal & surveillance robot. 1st prize, 3rd National Level Junior Robotic Challenge (Bangalore).',
  },
  {
    period: "2019",
    title: "Robotics Developer & Workshop Mentor",
    org: "Kidobotics",
    desc: "Smart dustbin robot — solar powered, AI sensors, auto lid + GSM/SMS alerts. Led robotics workshops at public events.",
  },
  {
    period: "2019 – 2022",
    title: "Ethical Hacker",
    org: "Client Work",
    desc: "Freelance ethical hacking engagements — web app security, network penetration testing.",
  },
  {
    period: "2022 – 2024",
    title: "B.E. Computer Science",
    org: "Chitkara University",
    desc: "Started university; credits later transferred to Deakin.",
  },
  {
    period: "2024",
    title: "Forklift Driver & Manager",
    org: "MKM Tiles",
    desc: "Winter holidays — forklift operations and on-site management.",
  },
  {
    period: "Jul – Oct 2024",
    title: "Junior Backend Engineer",
    org: "Gopher Industries · SIT374 Team Project (A)",
    desc: "Project Management and Practices — backend development for a team-based software engineering capstone project.",
  },
  {
    period: "2024 – 2026",
    title: "B. Software Engineering (Honours)",
    org: "Deakin University",
    desc: "Graduated with First Class Honours. Minor in Cyber Security.",
  },
  {
    period: "2024 – 2026",
    title: "Console Operator (Casual)",
    org: "7-Eleven",
    desc: "Night-shift casual — cash handling, inventory, customer service.",
  },
  {
    period: "Mar – Jun 2025",
    title: "Lead Backend Engineer",
    org: "Gopher Industries · SIT378 Team Project (B)",
    desc: "Execution and Delivery — led the backend team for the full-cycle software engineering capstone, from architecture through deployment.",
  },
  {
    period: "2025",
    title: "Van Driver",
    org: "DHL",
    desc: "Winter holidays — delivery operations.",
  },
  {
    period: "2026",
    title: "Full Stack Developer — Remote Internship",
    org: "BibVault · Australia",
    desc: "Remote internship building production features with ASP.NET Core, MongoDB & Jira Agile.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
        Experience
      </p>
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Timeline</h2>

      <div className="relative pl-10">
        <div className="timeline-line" />
        {experience.map((e, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            <div className="timeline-dot" />
            <div className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-border2">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent">
                  {e.period}
                </span>
                <span className="text-sm font-semibold text-text">
                  {e.title}
                </span>
              </div>
              <div className="mb-1 text-xs text-text3">{e.org}</div>
              <p className="text-sm leading-relaxed text-text2">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
