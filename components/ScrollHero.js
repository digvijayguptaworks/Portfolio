"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";

export default function ScrollHero() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const hintRef = useRef(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef(0);
  const runningRef = useRef(false);
  const staticRef = useRef(false);

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const isStatic = () => reduceMq.matches || mobileMq.matches;

    // Write styles straight to the DOM each frame (no React re-render) for smoothness.
    const applyPhoto = (p) => {
      const el = photoRef.current;
      if (!el) return;
      if (staticRef.current) {
        el.style.transform = "";
        el.style.opacity = "";
        if (hintRef.current) hintRef.current.style.opacity = "0";
        return;
      }
      const e = p * p * (3 - 2 * p); // smoothstep
      const t = 1 - e;
      el.style.transform =
        "perspective(1500px) translate3d(0," +
        (t * 56).toFixed(2) +
        "px,0) rotateX(" +
        (t * 13).toFixed(2) +
        "deg) rotateY(" +
        (t * -22).toFixed(2) +
        "deg) scale(" +
        (0.8 + e * 0.2).toFixed(4) +
        ")";
      el.style.opacity = (0.55 + e * 0.45).toFixed(3);
      if (hintRef.current) hintRef.current.style.opacity = Math.max(0, 1 - e).toFixed(3);
    };

    const measure = () => {
      const el = sectionRef.current;
      if (!el) return 0;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      return scrolled / total;
    };

    // Damped follow: each frame move 12% of the way to the scroll target.
    const tick = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) < 0.0004) {
        currentRef.current = targetRef.current;
        applyPhoto(currentRef.current);
        runningRef.current = false;
        rafRef.current = 0;
        return;
      }
      currentRef.current += diff * 0.12;
      applyPhoto(currentRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!runningRef.current) {
        runningRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      targetRef.current = measure();
      kick();
    };
    const onResize = () => {
      staticRef.current = isStatic();
      targetRef.current = measure();
      currentRef.current = targetRef.current;
      applyPhoto(currentRef.current);
    };

    staticRef.current = isStatic();
    targetRef.current = measure();
    currentRef.current = targetRef.current;
    applyPhoto(currentRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    reduceMq.addEventListener?.("change", onResize);
    mobileMq.addEventListener?.("change", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduceMq.removeEventListener?.("change", onResize);
      mobileMq.removeEventListener?.("change", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative md:h-[185vh]">
      <div className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center px-6 py-14 md:sticky md:top-0 md:h-screen md:min-h-0 md:py-0">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-wood">Portfolio</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-inkbright sm:text-6xl md:text-[4.6rem]">
            hey. i&apos;m <span className="italic text-wood">digvijay.</span>
          </h1>
        </div>

        <div className="mt-8 grid w-full max-w-5xl items-center gap-8 md:grid-cols-[1fr_minmax(230px,360px)_1fr] md:gap-10">
          <p className="order-2 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted md:order-1 md:text-right">
            I build end-to-end products &mdash; from data to deployment.
          </p>

          <div className="order-1 md:order-2">
            <div
              ref={photoRef}
              className="photo-frame photo-frame-lg mx-auto will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden]"
            >
              {/* Replace public/photo.jpg with your own portrait */}
              <img src="/photo.jpg" alt={profile.name} />
            </div>
          </div>

          <p className="order-3 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted md:text-left">
            Python. Data. Full-stack. Still learning.
          </p>
        </div>

        <div className="mt-9 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Based in {profile.location}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[12px] font-semibold text-wood">
            <Link href="/work" className="hover:underline">Work &rarr;</Link>
            <Link href="/resume" className="hover:underline">Resume &rarr;</Link>
            <Link href="/contact" className="hover:underline">Contact &rarr;</Link>
          </div>
        </div>

        <div
          ref={hintRef}
          className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted"
        >
          scroll &darr;
        </div>
      </div>
    </section>
  );
}
