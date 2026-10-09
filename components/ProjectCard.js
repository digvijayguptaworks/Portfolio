import { projects } from "@/lib/data";

const accentBorder = {
  wood: "border-t-[3px] border-t-wood",
  oak: "border-t-[3px] border-t-oak",
  sage: "border-t-[3px] border-t-sage",
};

const accentText = {
  wood: "text-wood",
  oak: "text-wooddeep",
  sage: "text-sage",
};

export default function ProjectCard({ project, detailed = false }) {
  return (
    <article className={"card card-hover flex flex-col " + (accentBorder[project.accent] || "")}>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-inkbright">{project.title}</h3>
        <span className="whitespace-nowrap font-mono text-[11px] text-muted">{project.date}</span>
      </div>
      <p className={"mb-3 font-mono text-[10.5px] uppercase tracking-[0.16em] " + (accentText[project.accent] || "text-wood")}>
        {project.subtitle}
      </p>

      {detailed && (
        <ul className="mb-4 space-y-2">
          {project.points.map((p) => (
            <li key={p} className="relative pl-4 text-sm leading-relaxed text-muted">
              <span className="absolute left-0 text-oak">›</span>
              {p}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-wood hover:underline"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
        </svg>
        View code
      </a>
    </article>
  );
}
