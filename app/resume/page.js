import { skillGroups, education, certifications, profile } from "@/lib/data";

export const metadata = { title: "Resume — Digvijay Gupta" };

export default function ResumePage() {
  return (
    <div className="shell py-20">
      <p className="sec-label">Resume</p>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-inkbright md:text-5xl">
          Education, skills &amp; credentials
        </h1>
        <a href="/Digvijay-Gupta-Resume.pdf" download className="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* EDUCATION */}
      <section className="mb-14">
        <h2 className="sec-label">Education</h2>
        <div className="timeline">
          {education.map((e) => (
            <div key={e.title} className="tl-item">
              <div className="mb-1 font-mono text-[11px] tracking-wide text-wood">{e.date}</div>
              <div className="text-[15.5px] font-semibold text-inkbright">{e.title}</div>
              <div className="mt-0.5 text-[13px] text-muted">{e.place}</div>
              <span className="mt-2 inline-block rounded-lg bg-[rgba(169,113,75,0.12)] px-3 py-1 font-mono text-[11px] font-semibold text-wood">
                {e.score}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-14">
        <h2 className="sec-label">Skills</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="card">
              <h3 className="mb-4 font-display text-lg font-semibold text-inkbright">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mb-14">
        <h2 className="sec-label">Certifications</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((c) => (
            <div key={c.title} className="card card-hover">
              <h3 className="text-[15.5px] font-bold leading-snug text-inkbright">{c.title}</h3>
              <p className="mt-1 text-[13px] text-muted">{c.issuer}</p>
              <span className="mt-3 inline-block rounded-md bg-[rgba(107,142,90,0.14)] px-2.5 py-1 font-mono text-[10.5px] font-medium text-sage">
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
