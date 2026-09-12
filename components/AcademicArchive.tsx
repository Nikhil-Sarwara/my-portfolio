"use client";
import { useState } from "react";

const units = [
  { code: "SIT102", name: "Intro to Programming", sem: "T1 2022", grade: "HD" },
  { code: "SIT111", name: "Systems & Hardware", sem: "T1 2022", grade: "HD" },
  { code: "SIT182", name: "Data Science", sem: "T2 2022", grade: "HD" },
  { code: "SIT210", name: "Programming 2", sem: "T3 2022", grade: "HD" },
  { code: "SIT218", name: "Robotics", sem: "T2 2023", grade: "HD" },
  { code: "SIT223", name: "Profession", sem: "T2 2023", grade: "HD" },
  { code: "SIT232", name: "OOP", sem: "T1 2023", grade: "HD" },
  { code: "SIT310", name: "IoT", sem: "T3 2023", grade: "HD" },
  { code: "SIT313", name: "Full-Stack", sem: "T1 2024", grade: "HD" },
  { code: "SIT314", name: "Cloud", sem: "T2 2024", grade: "HD" },
  { code: "SIT329", name: "Cybersecurity", sem: "T2 2024", grade: "HD" },
  { code: "SIT331", name: "Backend", sem: "T1 2025", grade: "HD" },
  { code: "SIT333", name: "Research Thesis", sem: "T1 2025", grade: "HD" },
  { code: "SIT379", name: "Project Management", sem: "T2 2025", grade: "HD" },
  { code: "SIT723/792", name: "Research Thesis 2", sem: "T3 2025", grade: "HD" },
];

const projects: Record<string, { title: string; desc: string }[]> = {
  SIT102: [
    { title: "Hello World", desc: "First C++ program using SplashKit" },
    { title: "Dodge Game", desc: "2D game with collision detection" },
    { title: "Banking System", desc: "OOP-based console banking app" },
  ],
  SIT218: [
    { title: "Robot Navigation", desc: "Path planning algorithms for mobile robots" },
    { title: "Vision System", desc: "Computer vision for object detection" },
  ],
  SIT313: [
    { title: "Full-Stack App", desc: "React + Node.js + MongoDB CRUD app" },
    { title: "REST API", desc: "RESTful API design & documentation" },
  ],
  SIT329: [
    { title: "Penetration Test", desc: "Web application security assessment" },
    { title: "Malware Analysis", desc: "Static & dynamic analysis lab" },
  ],
  SIT333: [
    { title: "GPS Spoofing", desc: "PX4 SITL simulation & ML detection" },
    { title: "Thesis Paper", desc: "MDPI Electronics publication" },
  ],
};

export default function AcademicArchive() {
  const [open, setOpen] = useState(false);

  return (
    <section id="academic-archive" className="mx-auto max-w-6xl px-6 py-24">
      <div className="archive-terminal">
        {/* terminal header */}
        <div className="archive-terminal-header">
          <span className="archive-terminal-dot bg-red-500" />
          <span className="archive-terminal-dot bg-yellow-500" />
          <span className="archive-terminal-dot bg-green-500" />
          <span className="ml-2 text-text3">
            ~/academic-archive
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto font-mono text-xs text-accent transition-colors hover:text-accent2"
          >
            {open ? "collapse ▴" : "expand ▾"}
          </button>
        </div>

        {open && (
          <div className="max-h-[600px] overflow-y-auto p-4">
            {/* terminal prompt */}
            <div className="mb-4 font-mono text-xs text-text3">
              <span className="text-green">$</span> cat ./deakin-university/units.json
              <br />
              <span className="text-text3">
                // {units.length} units · 15 High Distinctions · First Class Honours
              </span>
            </div>

            <div className="space-y-1">
              {units.map((u) => {
                const hasProjects = projects[u.code];
                return (
                  <details key={u.code} className="group">
                    <summary className="flex items-center gap-3 rounded px-2 py-1.5 font-mono text-xs transition-colors hover:bg-surface2">
                      <span className="chevron text-text3">▸</span>
                      <span className="w-20 text-accent">{u.code}</span>
                      <span className="flex-1 text-text2">{u.name}</span>
                      <span className="text-text3">{u.sem}</span>
                      <span className="rounded bg-green/10 px-1.5 py-0.5 text-[10px] font-bold text-green">
                        {u.grade}
                      </span>
                    </summary>
                    {hasProjects && (
                      <div className="ml-8 space-y-1 border-l border-border py-1 pl-4">
                        {hasProjects.map((p) => (
                          <div key={p.title} className="font-mono text-xs">
                            <span className="text-amber">→</span>{" "}
                            <span className="text-text2">{p.title}</span>
                            <span className="ml-2 text-text3">— {p.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border pt-4 font-mono text-xs text-text3">
              <span className="text-green">$</span> echo "First Class Honours — Deakin University 2024-2026"
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
