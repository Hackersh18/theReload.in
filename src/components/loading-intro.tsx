"use client";

import "@/styles/intro.css";
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
  const links = ["Home", "About Me", "My Services", "Cool Links", "Guestbook", "Email Me"];

  return (
    <div className="intro-90s-site flex h-full flex-col overflow-hidden">
      {/* Top banner */}
      <div className="intro-90s-banner shrink-0">
        <span className="intro-90s-blink">★ NEW ★</span> Welcome to Studio North on the World Wide Web!
      </div>

      {/* Title block */}
      <header className="intro-90s-header shrink-0">
        <h1 className="intro-90s-title">~* Studio North *~</h1>
        <p className="intro-90s-subtitle">
          Your #1 Source for Home Pages on the Information Superhighway
        </p>
        <p className="intro-90s-netscape">Best viewed with Netscape Navigator 3.0 · 800×600</p>
      </header>

      <hr className="intro-90s-hr" />

      {/* Nav row */}
      <nav className="intro-90s-nav shrink-0">
        {links.map((link) => (
          <a key={link} href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
            {link}
          </a>
        ))}
      </nav>

      <hr className="intro-90s-hr intro-90s-hr-rainbow" />

      {/* Marquee */}
      <div className="intro-90s-marquee shrink-0">
        <div className="intro-marquee-track">
          ★ Thanks for visiting! ★ Sign my guestbook! ★ Under construction but still awesome! ★
          Thanks for visiting! ★ Sign my guestbook! ★
        </div>
      </div>

      <main className="intro-90s-main min-h-0 flex-1 overflow-y-auto">
        <div className="intro-90s-columns">
          {/* Left sidebar */}
          <aside className="intro-90s-sidebar">
            <div className="intro-90s-box">
              <p className="intro-90s-box-title">Site Menu</p>
              <ul>
                {links.slice(0, 4).map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="intro-90s-box intro-90s-construction">
              <p className="intro-90s-box-title">Site Status</p>
              <div className="intro-90s-under-construction" aria-hidden>
                🚧
              </div>
              <p className="intro-90s-blink intro-90s-construction-text">UNDER CONSTRUCTION</p>
            </div>

            <div className="intro-90s-box">
              <p className="intro-90s-box-title">You are visitor #</p>
              <p className="intro-90s-counter">000,847</p>
            </div>
          </aside>

          {/* Main content */}
          <div className="intro-90s-content">
            <div className="intro-90s-welcome-box">
              <h2>Welcome to My Homepage!!!</h2>
              <p>
                Hi!!! My name is <strong>Steve</strong> and this is the official Studio North
                website. We make <span className="intro-90s-highlight">COOL WEB PAGES</span> for
                local businesses. Check back often — I update this page whenever I learn a new HTML
                tag!!!
              </p>
            </div>

            <h3 className="intro-90s-section-head">☆ Our Services ☆</h3>
            <table className="intro-90s-table">
              <tbody>
                {[
                  ["Web Pages", "Custom home pages with clipart and MIDI music"],
                  ["Email Setup", "Get your own @studionorth.com address!!!"],
                  ["Scanning", "We scan your photos for the internet"],
                ].map(([title, desc]) => (
                  <tr key={title}>
                    <td className="intro-90s-table-label">{title}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="intro-90s-section-head">☆ Cool Stuff ☆</h3>
            <p>
              <a href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                Click here
              </a>{" "}
              to see our portfolio ·{" "}
              <a href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                Download our brochure (2.4 MB)
              </a>
            </p>

            <div className="intro-90s-guestbook">
              <p>✉️ Email me: info@studionorth.com</p>
              <p>
                <a href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                  Sign My Guestbook!!!
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <hr className="intro-90s-hr" />

      <footer className="intro-90s-footer shrink-0">
        <p>© 1996 Studio North · Last updated: March 14, 1997</p>
        <p className="intro-90s-footer-small">
          Made with Microsoft FrontPage · Not responsible for broken links
        </p>
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
                  http://www.studionorth.com/index.htm
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
