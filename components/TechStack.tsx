"use client";
import { useState } from "react";

const categories = [
  {
    label: "Backend & Cloud",
    items: [
      { name: "ASP.NET Core", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "Vercel", icon: "▲" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQLite", icon: "💾" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Syncfusion", icon: "📊" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML/CSS", icon: "📄" },
    ],
  },
  {
    label: "Workflow & AI",
    items: [
      { name: "Jira Premium", icon: "📋" },
      { name: "n8n", icon: "🔄" },
      { name: "Gemini AI Pro", icon: "🧠" },
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "Jenkins", icon: "🔧" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "C#", icon: "C#" },
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "SQL", icon: "SQL" },
      { name: "C++", icon: "C+" },
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
        Toolkit
      </p>
      <h2 className="mb-10 text-3xl font-bold tracking-tight">Tech Stack</h2>

      {/* tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setActive(i)}
            className={`tab-btn ${i === active ? "active" : ""}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-all hover:border-border2 hover:bg-surface2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface2 text-sm">
              {item.icon}
            </span>
            <span className="font-mono text-sm font-medium text-text2">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
