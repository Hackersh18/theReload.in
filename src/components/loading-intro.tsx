"use client";

import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { cn } from "@/lib/utils";

const INTRO_KEY = "reload-intro-seen";

type IntroStep =
  | "browse"
  | "moving"
  | "clicking"
  | "loading"
  | "zoom"
  | "exit";

function shouldSkipIntro() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  return sessionStorage.getItem(INTRO_KEY) === "1";
}

function OldWebsiteMock() {
  const services = [
    {
      title: "Web Design",
      desc: "Responsive layouts built with the latest frameworks.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media, and paid campaigns that convert.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 18V6l8 6 8-6v12" />
        </svg>
      ),
    },
    {
      title: "Brand Strategy",
      desc: "Logos, guidelines, and messaging for your business.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="intro-old-site flex h-full flex-col overflow-hidden bg-[#f8fafc] font-sans text-[#334155]">
      <header className="flex shrink-0 items-center justify-between border-b border-[#e2e8f0] bg-white px-5 py-4 sm:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3b82f6] text-sm font-bold text-white">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0f172a]">
            Studio North
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#64748b] md:flex">
          {["Work", "Services", "About", "Blog"].map((item, i) => (
            <span
              key={item}
              className={cn(i === 0 && "font-semibold text-[#3b82f6]")}
            >
              {item}
            </span>
          ))}
        </nav>
        <span className="rounded-lg bg-[#3b82f6] px-4 py-2 text-sm font-semibold text-white shadow-sm">
          Get Started
        </span>
      </header>

      <div className="shrink-0 border-b border-[#e2e8f0] bg-[#eff6ff] px-5 py-2.5 text-center text-xs text-[#3b82f6] sm:text-sm">
        <span className="font-medium">New:</span> We now offer mobile app development —{" "}
        <span className="underline">learn more</span>
      </div>

      <section className="shrink-0 bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] px-5 py-10 text-white sm:px-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
            Full-Service Agency
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            We help businesses grow online
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Strategy, design, and development for companies that want a
            professional web presence. Trusted by over 200 clients worldwide.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#1e40af] shadow-md">
              View Our Work
            </span>
            <span className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      <div className="grid shrink-0 grid-cols-3 divide-x divide-[#e2e8f0] border-b border-[#e2e8f0] bg-white">
        {[
          { value: "200+", label: "Projects" },
          { value: "15", label: "Team Members" },
          { value: "8 yrs", label: "Experience" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-5 text-center sm:py-6">
            <p className="text-xl font-bold text-[#0f172a] sm:text-2xl">{stat.value}</p>
            <p className="mt-0.5 text-xs text-[#94a3b8] sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <main className="min-h-0 flex-1 overflow-y-auto px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
            What we do
          </h2>
          <p className="mt-2 text-sm text-[#64748b] sm:text-base">
            End-to-end digital services for modern businesses
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition-shadow sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eff6ff] text-[#3b82f6]">
                {service.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#0f172a] sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                {service.desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-[#3b82f6]">
                Learn more →
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-[#f1f5f9] p-6 text-center sm:mt-10 sm:p-8">
          <h3 className="text-lg font-bold text-[#0f172a] sm:text-xl">
            Ready to start your project?
          </h3>
          <p className="mt-2 text-sm text-[#64748b]">
            Schedule a free consultation with our team today.
          </p>
          <span className="mt-4 inline-block rounded-lg bg-[#3b82f6] px-6 py-2.5 text-sm font-semibold text-white">
            Book a Call
          </span>
        </div>
      </main>

      <footer className="shrink-0 border-t border-[#e2e8f0] bg-white px-5 py-4 text-center text-xs text-[#94a3b8] sm:text-sm">
        © 2018 Studio North Agency · Privacy · Terms
      </footer>
    </div>
  );
}

function ReloadToolbarButton({
  buttonRef,
  active,
  clicking,
}: {
  buttonRef: RefObject<HTMLButtonElement | null>;
  active: boolean;
  clicking: boolean;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      tabIndex={-1}
      className={cn(
        "intro-reload-btn flex items-center gap-2 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-1.5",
        active && "intro-reload-btn-active",
        clicking && "intro-reload-btn-click",
      )}
      aria-hidden
    >
      <Image
        src="/logo.png"
        alt=""
        width={22}
        height={22}
        className={cn("shrink-0", clicking && "intro-reload-logo-spin")}
        style={{ width: 22, height: 22 }}
        priority
      />
      <span className="text-xs font-bold tracking-tight text-accent sm:text-sm">
        Reload
      </span>
    </button>
  );
}

function IntroCursor({
  x,
  y,
  clicking,
  visible,
}: {
  x: number;
  y: number;
  clicking: boolean;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        "intro-cursor pointer-events-none fixed left-0 top-0 z-[120]",
        visible ? "opacity-100" : "opacity-0",
      )}
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
      aria-hidden
    >
      <div className={cn("intro-cursor-press", clicking && "is-clicking")}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L5 19L9 15L13 21L15 20L11 14H16L5 3Z"
            fill="#0a0a0a"
            stroke="#fff"
            strokeWidth="1.2"
          />
        </svg>
        {clicking && <span className="intro-click-ripple" />}
      </div>
    </div>
  );
}

function LoadingBar({ phase }: { phase: "loading" | "zoom" | "exit" }) {
  return (
    <div
      className={cn(
        "intro-loader w-full max-w-sm px-6",
        phase === "zoom" && "intro-loader-zoom",
      )}
    >
      <div className="intro-loader-panel rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white/90">Reloading site</p>
          <span className="intro-loader-dots flex gap-1" aria-hidden>
            {[0, 1, 2].map((dot) => (
              <span key={dot} />
            ))}
          </span>
        </div>

        <div className="intro-loader-track relative h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className={cn(
              "intro-loader-fill absolute inset-y-0 left-0 rounded-full bg-accent",
              phase === "loading" && "intro-loader-fill-run",
            )}
          />
          <div className="intro-loader-shimmer pointer-events-none absolute inset-0" aria-hidden />
        </div>

        <p className="intro-loader-status mt-3 text-center text-xs font-medium text-white/45">
          {phase === "zoom" ? "Almost there…" : "Fetching assets & compiling…"}
        </p>
      </div>
    </div>
  );
}

export function LoadingIntro() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState<IntroStep>("browse");
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [clicking, setClicking] = useState(false);
  const reloadRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldSkipIntro()) return;

    let cancelled = false;

    const activateFrame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      setActive(true);
      document.body.classList.add("intro-active");
      document.body.style.overflow = "hidden";
    });

    const startMove = window.setTimeout(() => setStep("moving"), 800);
    const startClick = window.setTimeout(() => {
      setStep("clicking");
      setClicking(true);
    }, 2400);
    const startLoading = window.setTimeout(() => {
      setStep("loading");
      setClicking(false);
      setCursor((c) => ({ ...c, visible: false }));
    }, 3100);
    const startZoom = window.setTimeout(() => setStep("zoom"), 5000);
    const startExit = window.setTimeout(() => setStep("exit"), 6600);
    const finish = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      setActive(false);
      document.body.classList.remove("intro-active");
      document.body.style.overflow = "";
    }, 7000);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(activateFrame);
      clearTimeout(startMove);
      clearTimeout(startClick);
      clearTimeout(startLoading);
      clearTimeout(startZoom);
      clearTimeout(startExit);
      clearTimeout(finish);
      document.body.classList.remove("intro-active");
      document.body.style.overflow = "";
    };
  }, []);

  useLayoutEffect(() => {
    if (!active || !frameRef.current || !reloadRef.current) return;

    const frame = frameRef.current.getBoundingClientRect();
    const btn = reloadRef.current.getBoundingClientRect();
    const start = {
      x: frame.left + frame.width * 0.55,
      y: frame.top + frame.height * 0.45,
    };
    const target = {
      x: btn.left + btn.width / 2 - 4,
      y: btn.top + btn.height / 2 - 2,
    };

    if (step === "browse") {
      const frameId = window.requestAnimationFrame(() => {
        setCursor({ ...start, visible: true });
      });
      return () => window.cancelAnimationFrame(frameId);
    }

    if (step === "moving") {
      const frameId = window.requestAnimationFrame(() => {
        setCursor({ ...start, visible: true });
      });
      const id = window.setTimeout(() => {
        setCursor({ ...target, visible: true });
      }, 60);
      return () => {
        window.cancelAnimationFrame(frameId);
        clearTimeout(id);
      };
    }
  }, [active, step]);

  if (!active) return null;

  const showBrowser =
    step === "browse" || step === "moving" || step === "clicking";
  const showLoader =
    step === "loading" || step === "zoom" || step === "exit";

  return (
    <>
      <div
        className={cn(
          "intro-stage fixed inset-0 z-[110] flex items-center justify-center overflow-hidden p-2 sm:p-4 lg:p-6",
          showLoader && "intro-stage-out",
        )}
        aria-hidden={showLoader}
      >
        <IntroCursor
          x={cursor.x}
          y={cursor.y}
          clicking={clicking}
          visible={cursor.visible && showBrowser}
        />

        <div
          className={cn(
            "intro-browser-wrap relative w-full max-w-[min(96vw,72rem)]",
            showBrowser && "intro-browser-visible",
            showLoader && "intro-browser-out",
            step === "clicking" && "intro-browser-shake",
          )}
        >
          <div
            ref={frameRef}
            className="overflow-hidden rounded-xl border border-[#3a3a3a] bg-[#2b2b2b] shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-[#3a3a3a] bg-[#353535] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-2 flex flex-1 items-center gap-2">
                <button
                  type="button"
                  tabIndex={-1}
                  className="rounded px-2.5 py-1 text-xs text-white/40"
                  aria-hidden
                >
                  ←
                </button>
                <button
                  type="button"
                  tabIndex={-1}
                  className="rounded px-2.5 py-1 text-xs text-white/40"
                  aria-hidden
                >
                  →
                </button>
                <ReloadToolbarButton
                  buttonRef={reloadRef}
                  active={step === "moving" || step === "clicking"}
                  clicking={step === "clicking"}
                />
                <div className="ml-1 min-w-0 flex-1 truncate rounded bg-[#1e1e1e] px-3 py-1.5 text-xs text-white/50">
                  http://studionorth.agency
                </div>
              </div>
            </div>

            <div className="h-[min(72vh,580px)] sm:h-[min(74vh,620px)]">
              <OldWebsiteMock />
            </div>
          </div>
        </div>
      </div>

      {showLoader && (
        <div
          className={cn(
            "intro-curtain fixed inset-0 z-[117] flex items-center justify-center",
            step === "loading" && "intro-curtain-in",
            step === "zoom" && "intro-curtain-zoom-out",
            step === "exit" && "intro-curtain-out",
          )}
          aria-live="polite"
          aria-label="Loading site"
        >
          <LoadingBar
            phase={step === "loading" ? "loading" : "zoom"}
          />
        </div>
      )}
    </>
  );
}
