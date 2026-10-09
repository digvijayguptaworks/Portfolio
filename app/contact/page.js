import { profile, links } from "@/lib/data";

export const metadata = { title: "Contact — Digvijay Gupta" };

function Card({ label, value, href, external, icon }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card card-hover flex items-center gap-4 text-left"
    >
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[rgba(169,113,75,0.12)] text-wood">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{label}</span>
        <span className="block break-words text-[13.5px] font-semibold text-inkbright">{value}</span>
      </span>
    </a>
  );
}

const icons = {
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8.5 8h3.83v2.19h.05c.53-1 1.84-2.06 3.79-2.06C20.2 8.13 21 10.5 21 14.06V24h-4v-8.78c0-2.09-.04-4.78-2.92-4.78-2.92 0-3.37 2.28-3.37 4.63V24h-4z" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  leetcode: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
};

export default function ContactPage() {
  return (
    <div className="shell py-20 text-center">
      <p className="sec-label justify-center">Contact</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-inkbright md:text-5xl">
        Let&apos;s work together
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">
        Open to machine learning, data and software roles, internships and freelance work. Reach out through any of
        these.
      </p>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card label="Email" value={profile.email} href={"mailto:" + profile.email} icon={icons.mail} />
        <Card label="Phone" value={profile.phone} href={"tel:" + profile.phoneHref} icon={icons.phone} />
        <Card label="LinkedIn" value="/in/digvijaygupta29" href={links.linkedin} external icon={icons.linkedin} />
        <Card label="GitHub" value="/digvijaygupta0001" href={links.github} external icon={icons.github} />
        <Card label="LeetCode" value="/u/digvijaygupta" href={links.leetcode} external icon={icons.leetcode} />
      </div>
    </div>
  );
}
