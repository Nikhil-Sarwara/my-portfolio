"use client";
import { useState } from "react";

const units = [
  { code: "SIT102", name: "Introduction to Programming", sem: "T1 2022", grade: "HD" },
  { code: "SIT111", name: "Computer Systems", sem: "T2 2022", grade: "HD" },
  { code: "SIT210", name: "Embedded Systems Development", sem: "T3 2022", grade: "HD" },
  { code: "SIT182", name: "Introduction to Data Science", sem: "T1 2023", grade: "HD" },
  { code: "SIT218", name: "Robotics Application Development", sem: "T2 2023", grade: "HD" },
  { code: "SIT223", name: "Professional Practice in IT", sem: "T1 2023", grade: "HD" },
  { code: "SIT232", name: "Object-Oriented Development", sem: "T2 2023", grade: "HD" },
  { code: "SIT313", name: "Full-Stack Development: Secure Frontend", sem: "T1 2023", grade: "HD" },
  { code: "SIT331", name: "Full Stack Development: Secure Backend", sem: "T2 2023", grade: "HD" },
  { code: "SIT310", name: "IoT Systems and Cloud Integration", sem: "T1 2024", grade: "HD" },
  { code: "SIT314", name: "Cloud Computing", sem: "T2 2024", grade: "HD" },
  { code: "SIT329", name: "Cybersecurity", sem: "T1 2024", grade: "HD" },
  { code: "SIT333", name: "Research Practice", sem: "T2 2024", grade: "HD" },
  { code: "SIT379", name: "Project Management", sem: "T1 2025", grade: "HD" },
  { code: "SIT723/792", name: "Research Thesis", sem: "T3 2025", grade: "HD" },
];

const projects: Record<string, { title: string; desc: string; stack: string }[]> = {
  SIT102: [
    { title: "Hello World", desc: "Foundational C++ program using SplashKit — verified dev tools setup.", stack: "C++, SplashKit" },
    { title: "Shape Drawing", desc: "Window drawing with shapes — learning basic rendering primitives.", stack: "C++, SplashKit" },
    { title: "Scene Drawing Animation", desc: "Animated scene with bitmaps and sound effects.", stack: "C++, SplashKit" },
    { title: "Hello User", desc: "User input/output interaction program.", stack: "C++, SplashKit" },
    { title: "Structs and Enums", desc: "C++ structs and enumerations for structured data.", stack: "C++" },
    { title: "Arrays and Vectors", desc: "Indexed data structures and dynamic arrays.", stack: "C++" },
    { title: "Sort Visualiser", desc: "Real-time visualisation of sorting algorithms with graphical output.", stack: "C++, SplashKit" },
    { title: "Game Project Part 1", desc: "Game foundation — setup, sprites, basic game loop.", stack: "C++, SplashKit" },
    { title: "Game Project Part 2", desc: "Collision detection, scoring, and advanced game mechanics.", stack: "C++, SplashKit" },
    { title: "Custom Invoice Generator", desc: "Automated invoice creation with professional formatting and QR codes.", stack: "C++, QR Code Libraries" },
    { title: "Linked Lists", desc: "Dynamic memory allocation, pointers, and node-based data structure.", stack: "C++" },
    { title: "Something Awesome", desc: "Extended invoice generator with advanced features.", stack: "C++, Advanced Libraries" },
  ],
  SIT111: [
    { title: "Computer Systems Overview", desc: "Hardware components, software layers, and system interaction.", stack: "Computer Architecture" },
    { title: "Hardware Software Abstractions", desc: "Abstraction layers in computer system design.", stack: "System Design" },
    { title: "Data Representation", desc: "Binary, hex, ASCII, Unicode encoding systems.", stack: "Data Encoding" },
    { title: "Computer Architecture", desc: "CPU design, memory hierarchy, bus systems.", stack: "Computer Architecture" },
    { title: "Operating Systems", desc: "Process management, memory management, scheduling algorithms.", stack: "Operating Systems" },
    { title: "Hack Assembly Language", desc: "Low-level programming — From Nand to Tetris course.", stack: "Hack Assembly" },
    { title: "CPU Design", desc: "ALU, control unit, registers, instruction execution cycle.", stack: "CPU Architecture" },
    { title: "Memory and Storage", desc: "RAM, ROM, cache, secondary storage systems.", stack: "Memory Systems" },
    { title: "I/O Systems", desc: "Device drivers, interrupts, DMA, I/O interfaces.", stack: "I/O Systems" },
    { title: "System Security", desc: "Common threats, vulnerabilities, and security measures.", stack: "Cybersecurity" },
    { title: "Networking Fundamentals", desc: "OSI model, TCP/IP, network protocols.", stack: "Networking" },
    { title: "Database Systems", desc: "Data modeling, relational databases, SQL queries.", stack: "SQL, Databases" },
    { title: "Troubleshooting Methods", desc: "Diagnostic techniques and systematic problem resolution.", stack: "Diagnostics" },
    { title: "System Integration", desc: "How system components work together — integration testing.", stack: "System Integration" },
    { title: "Ethics in Computing", desc: "Privacy, IP, professional responsibility in computing.", stack: "Ethics" },
    { title: "Future of Computing", desc: "Quantum computing, AI, IoT emerging trends.", stack: "Emerging Technology" },
    { title: "Helping Others", desc: "Peer teaching and knowledge sharing.", stack: "Communication" },
    { title: "Something Awesome", desc: "Creative advanced project demonstrating system knowledge.", stack: "Creative Development" },
  ],
  SIT210: [
    { title: "Embedded Systems Basics", desc: "Microcontroller architecture, GPIO programming, basic I/O.", stack: "C++, Microcontrollers" },
    { title: "Microcontroller Programming", desc: "Advanced features — timers, interrupts, PWM, comms interfaces.", stack: "C++, Arduino" },
    { title: "RTOS Concepts", desc: "Task scheduling, synchronization, real-time constraints.", stack: "FreeRTOS" },
    { title: "Sensor Interfacing", desc: "Temperature, humidity, motion sensors via I2C/SPI.", stack: "Sensors, ADC/DAC" },
    { title: "MQTT Communication", desc: "Device-to-cloud communication with HiveMQ.", stack: "MQTT, HiveMQ" },
    { title: "School Bus Monitoring System", desc: "IoT project — real-time tracking, student attendance, parent alerts.", stack: "Raspberry Pi, Arduino, MQTT, Firebase" },
  ],
  SIT182: [
    { title: "Python Fundamentals", desc: "Variables, data types, operators, control structures.", stack: "Python, Pandas" },
    { title: "Data Structures", desc: "Lists, dictionaries, sets, tuples — comprehensive study.", stack: "Python" },
    { title: "Algorithms", desc: "Sorting, searching, recursive algorithms.", stack: "Python" },
    { title: "File Handling", desc: "Text, CSV, and JSON file processing.", stack: "Python, CSV, JSON" },
    { title: "OOP Concepts", desc: "Classes, objects, inheritance, polymorphism in Python.", stack: "Python" },
    { title: "Web Scraping", desc: "BeautifulSoup and Requests for HTML parsing.", stack: "Python, BeautifulSoup" },
    { title: "Data Analysis", desc: "Process, analyse, and visualise data with Pandas and Matplotlib.", stack: "Python, Pandas, Matplotlib" },
    { title: "Automation Scripts", desc: "Real-world problem solving through Python automation.", stack: "Python" },
  ],
  SIT218: [
    { title: "Robotics Fundamentals", desc: "Robot components, sensors, actuators, control systems.", stack: "ROS, Python" },
    { title: "ROS Basics", desc: "Nodes, topics, messages, services in Robot Operating System.", stack: "ROS, Python, C++" },
    { title: "Navigation Systems", desc: "Path planning, obstacle avoidance, localisation.", stack: "ROS Navigation Stack" },
    { title: "Computer Vision", desc: "Object detection, tracking, and image processing for robots.", stack: "OpenCV, ROS, Python" },
    { title: "Robot Control", desc: "Motion planning, inverse kinematics, feedback control.", stack: "ROS, Control Theory" },
    { title: "Integration Project", desc: "Full robotics integration — navigation, vision, and control.", stack: "ROS, OpenCV, C++" },
  ],
  SIT223: [
    { title: "SWOT Analysis", desc: "Personal and professional capabilities assessment.", stack: "Strategic Analysis" },
    { title: "DevOps Pipeline with Jenkins", desc: "CI/CD pipeline implementation with automated testing and deployment.", stack: "Jenkins, Git, CI/CD" },
    { title: "Git Version Control", desc: "Branching strategies, merge conflicts, collaborative workflows.", stack: "Git, GitHub" },
    { title: "Professional Resume", desc: "Technical skills presentation for employers.", stack: "Professional Communication" },
    { title: "Cover Letter", desc: "Persuasive cover letter for job applications.", stack: "Professional Communication" },
    { title: "Team Collaboration", desc: "Effective team skills — communication, management, conflict resolution.", stack: "Team Collaboration" },
    { title: "Career Planning", desc: "Goal setting, skill development roadmap, professional growth.", stack: "Career Development" },
  ],
  SIT232: [
    { title: "OOP Fundamentals", desc: "Classes, objects, basic OOP in C++.", stack: "C++, OOP" },
    { title: "Classes and Objects", desc: "Member variables, methods, access specifiers.", stack: "C++" },
    { title: "Inheritance", desc: "Single and multiple inheritance hierarchies.", stack: "C++" },
    { title: "Polymorphism", desc: "Virtual functions, overloading, runtime polymorphism.", stack: "C++" },
    { title: "Design Patterns", desc: "Singleton, Factory, Observer, Strategy patterns.", stack: "C++, Design Patterns" },
    { title: "Unit Testing", desc: "Test-driven development for C++ classes.", stack: "C++, Testing" },
    { title: "Design Principles", desc: "SOLID, DRY, KISS, YAGNI principles.", stack: "C++" },
    { title: "Final Project", desc: "Comprehensive OOP mastery project.", stack: "C++, OOP" },
  ],
  SIT313: [
    { title: "Personal Website", desc: "HTML and CSS personal website — responsive design fundamentals.", stack: "HTML, CSS" },
    { title: "Welcome Email", desc: "Professional email template for Deakin University.", stack: "HTML, CSS" },
    { title: "Home Page with React", desc: "DEV@Deakin home page with React and Chakra UI.", stack: "React, Chakra UI, Tailwind" },
    { title: "New Post Page", desc: "Post creation form with validation.", stack: "React, Chakra UI" },
    { title: "Login & Registration", desc: "Firebase Authentication integration.", stack: "React, Firebase Auth" },
    { title: "Firestore Integration", desc: "NoSQL data persistence with Firebase Firestore.", stack: "React, Firebase Firestore" },
    { title: "Website Deployment", desc: "CI/CD deployment to Netlify.", stack: "Netlify, React" },
    { title: "Newsletter Feature", desc: "Subscription functionality in signup component.", stack: "React, Firebase" },
    { title: "Subscription Plans", desc: "Payment integration with Stripe and code editor.", stack: "React, Stripe, CodeMirror" },
    { title: "DEV@DEAKIN App", desc: "Complete web application with auth, CRUD, and real-time features.", stack: "React, Firebase, CodeMirror" },
  ],
  SIT310: [
    { title: "IoT Fundamentals", desc: "IoT architectures, protocols, system components.", stack: "IoT, Sensors" },
    { title: "Sensor Networks", desc: "Sensor selection, network topology, data collection.", stack: "IoT, Wireless" },
    { title: "Cloud Integration", desc: "IoT devices with cloud platforms for storage and visualisation.", stack: "Cloud, IoT, APIs" },
    { title: "Data Analytics", desc: "IoT data stream processing and insight generation.", stack: "Analytics, Visualisation" },
    { title: "Security", desc: "IoT authentication, encryption, threat mitigation.", stack: "Security, IoT" },
    { title: "Final Project", desc: "Comprehensive IoT system — sensors, cloud, analytics, security.", stack: "IoT, Cloud, Analytics" },
  ],
  SIT314: [
    { title: "Cloud Architecture", desc: "Scalability, reliability, and cost-optimised cloud design.", stack: "Cloud, AWS" },
    { title: "Microservices", desc: "Service design, communication patterns, orchestration.", stack: "Docker, Kubernetes" },
    { title: "Containerization", desc: "Docker containers and orchestration.", stack: "Docker, CI/CD" },
    { title: "DevOps Practices", desc: "CI/CD pipelines, infrastructure as code, automation.", stack: "Jenkins, Git" },
    { title: "Cloud Security", desc: "IAM, access control, encryption for cloud infrastructure.", stack: "Cloud Security" },
    { title: "Deployment Project", desc: "Full cloud deployment — architecture, services, containers, DevOps.", stack: "Cloud, Docker, DevOps" },
  ],
  SIT329: [
    { title: "Network Security", desc: "Firewalls, IDS/IPS, VPN, network monitoring.", stack: "Network Security" },
    { title: "Penetration Testing", desc: "Recon, scanning, exploitation, and reporting.", stack: "Kali Linux, Metasploit, Nmap" },
    { title: "Cryptography", desc: "Symmetric/asymmetric encryption, hashing, SSL/TLS.", stack: "Cryptography" },
    { title: "Security Auditing", desc: "Vulnerability assessment, compliance, policy review.", stack: "Auditing Tools" },
  ],
  SIT331: [
    { title: "Backend Development", desc: "Node.js and Express.js server creation.", stack: "Node.js, Express.js" },
    { title: "Database Integration", desc: "MongoDB CRUD operations with Mongoose.", stack: "Node.js, MongoDB" },
    { title: "API Development", desc: "RESTful API design, endpoints, documentation.", stack: "REST API, Express" },
    { title: "Authentication", desc: "JWT tokens, sessions, role-based access.", stack: "JWT, Bcrypt" },
    { title: "Security Implementation", desc: "Input validation, XSS/SQL injection prevention.", stack: "Security, Helmet" },
    { title: "Full Stack Project", desc: "Complete backend + frontend + database integration.", stack: "Node.js, Express, MongoDB" },
  ],
  SIT333: [
    { title: "Research Methods", desc: "Quantitative and qualitative approaches, research design.", stack: "Research Methods" },
    { title: "Literature Review", desc: "Finding, analysing, and synthesising existing research.", stack: "Academic Research" },
    { title: "Data Collection", desc: "Surveys, interviews, and observational studies.", stack: "Data Collection" },
    { title: "Analysis Techniques", desc: "Statistical analysis and data interpretation.", stack: "Statistics, Visualisation" },
    { title: "Research Project", desc: "End-to-end research from design to analysis.", stack: "Research, Analysis" },
  ],
  SIT379: [
    { title: "Project Planning", desc: "Scope, WBS, scheduling, resource allocation, risk management.", stack: "Project Management" },
    { title: "Requirements Analysis", desc: "Stakeholder analysis, use cases, requirements documentation.", stack: "Requirements Engineering, UML" },
    { title: "Design Phase", desc: "Architecture, interface design, data modeling.", stack: "UML, Architecture" },
    { title: "Implementation", desc: "Execution following design standards and project plans.", stack: "Development, Version Control" },
    { title: "Testing", desc: "Test planning, case development, execution, defect tracking.", stack: "Testing, QA" },
    { title: "Project Closure", desc: "Final delivery, documentation, lessons learned, handoff.", stack: "Documentation" },
  ],
  "SIT723/792": [
    { title: "Research Proposal", desc: "Research question, objectives, methodology, and significance.", stack: "Research Methods" },
    { title: "Literature Review", desc: "Extensive review of existing thesis-topic research.", stack: "Academic Research" },
    { title: "Methodology", desc: "Data collection, analysis methods, research procedures.", stack: "Research Methods, Statistics" },
    { title: "Implementation", desc: "Data collection, experiments, analysis execution.", stack: "Research Tools, Python" },
    { title: "Final Thesis", desc: "Complete GPS spoofing detection thesis — MDPI Electronics publication.", stack: "Python, PX4, ML" },
  ],
};

export default function AcademicArchive() {
  const [open, setOpen] = useState(false);
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  const totalProjects = Object.values(projects).reduce((a, b) => a + b.length, 0);

  return (
    <section id="academic-archive" className="mx-auto max-w-6xl px-6 py-24">
      <div className="archive-terminal">
        {/* terminal header */}
        <div className="archive-terminal-header">
          <span className="archive-terminal-dot bg-red-500" />
          <span className="archive-terminal-dot bg-yellow-500" />
          <span className="archive-terminal-dot bg-green-500" />
          <span className="ml-2 text-text3">~/academic-archive</span>
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
                // {units.length} units · {totalProjects} projects · 15 High Distinctions · First Class Honours
              </span>
            </div>

            <div className="space-y-1">
              {units.map((u) => {
                const hasProjects = projects[u.code] && projects[u.code].length > 0;
                const isExpanded = expandedUnit === u.code;
                return (
                  <details key={u.code} open={isExpanded}>
                    <summary
                      className="flex items-center gap-3 rounded px-2 py-1.5 font-mono text-xs transition-colors hover:bg-surface2 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpandedUnit(isExpanded ? null : u.code);
                      }}
                    >
                      <span className={`chevron text-text3 transition-transform ${isExpanded ? "rotate-90" : ""}`}>
                        ▸
                      </span>
                      <span className="w-24 text-accent">{u.code}</span>
                      <span className="flex-1 text-text2">{u.name}</span>
                      <span className="hidden sm:inline text-text3">{u.sem}</span>
                      <span className="rounded bg-green/10 px-1.5 py-0.5 text-[10px] font-bold text-green">
                        {u.grade}
                      </span>
                      {hasProjects && (
                        <span className="text-text3">
                          [{projects[u.code].length}]
                        </span>
                      )}
                    </summary>
                    {hasProjects && isExpanded && (
                      <div className="ml-8 space-y-1 border-l border-border py-1 pl-4">
                        {projects[u.code].map((p) => (
                          <div key={p.title} className="font-mono text-xs">
                            <span className="text-amber">→</span>{" "}
                            <span className="text-text2">{p.title}</span>
                            <span className="ml-2 text-text3">— {p.desc}</span>
                            <span className="ml-2 rounded bg-surface2 px-1 py-0.5 text-[9px] text-text3">
                              {p.stack}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border pt-4 font-mono text-xs text-text3">
              <span className="text-green">$</span> echo &quot;First Class Honours — Deakin University 2024-2026&quot;
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
