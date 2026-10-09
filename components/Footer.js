import Link from "next/link";
import { profile, links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(122,88,58,0.14)] py-10 text-center">
      <div className="shell">
        <span className="monogram mx-auto mb-3">DG</span>
        <p className="font-mono text-xs text-muted">
          {profile.name} &middot; {profile.location}
        </p>
        <p className="mt-2 font-mono text-xs text-muted">
          <Link href="/work">Work</Link>
          <span className="mx-2">·</span>
          <Link href="/resume">Resume</Link>
          <span className="mx-2">·</span>
          <Link href="/contact">Contact</Link>
          <span className="mx-2">·</span>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">·</span>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
