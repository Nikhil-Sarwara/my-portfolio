export default function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex justify-center gap-6">
          <a href="https://github.com/Nikhil-Sarwara" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text3 transition-colors hover:text-text">GitHub</a>
          <a href="https://linkedin.com/in/nikhil-sarwara/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text3 transition-colors hover:text-text">LinkedIn</a>
          <a href="mailto:info@nikhilsarwara.com" className="font-mono text-xs text-text3 transition-colors hover:text-text">Email</a>
          <a href="/resume.pdf" download className="font-mono text-xs text-text3 transition-colors hover:text-text">Resume</a>
        </div>
        <p className="font-mono text-xs text-text3">
          © {new Date().getFullYear()} Nikhil Sarwara — Melbourne, Australia
        </p>
      </div>
    </footer>
  );
}
