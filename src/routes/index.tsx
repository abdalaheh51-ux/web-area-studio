import { createFileRoute } from "@tanstack/react-router";
import { Globe, Facebook, Instagram, ArrowUpLeft, Share2, Check } from "lucide-react";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: LinkTree,
});

type LinkItem = {
  label: string;
  sublabel: string;
  href: string;
  target?: "_blank" | "_top";
  icon: ReactNode;
  accent: string;
};

const links: LinkItem[] = [
  {
    label: "الموقع الرسمي",
    sublabel: "webarea.dev — اكتشف خدماتنا وأعمالنا",
    href: "https://web-area-a.vercel.app/",
    icon: <Globe className="h-6 w-6" strokeWidth={2.2} />,
    accent: "from-blue-400/20 to-blue-600/20",
  },
  {
    label: "صفحتنا على فيسبوك",
    sublabel: "تابع آخر مشاريعنا وعروضنا",
    href: "https://www.facebook.com/WebArea/",
    icon: <Facebook className="h-6 w-6" strokeWidth={2.2} />,
    accent: "from-blue-500/20 to-blue-700/20"
  },
  {
    label: "انستجرام",
    sublabel: "شاهد أعمالنا ومشاريعنا المميزة",
    href: "https://www.instagram.com/web_erea.2/",
    icon: <Instagram className="h-6 w-6" strokeWidth={2.2} />,
    accent: "from-blue-600/20 to-slate-800/20",
  },
];




function LinkTree() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Web Area", url });
      } else if (typeof navigator !== "undefined") {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* dismissed */
    }
  };

  return (
    <main className="relative flex min-h-screen w-full items-start justify-center overflow-hidden px-4 py-10 sm:py-16">
      {/* Ambient background orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--brand-purple)", animation: "float-slow 12s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--brand-cyan)", animation: "float-slow 14s ease-in-out infinite reverse" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--brand-pink)" }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        {/* Share button */}
        <button
          onClick={handleShare}
          aria-label="مشاركة الصفحة"
          className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/80 backdrop-blur-xl transition hover:scale-105 hover:bg-card hover:text-foreground"
        >
          {copied ? <Check className="h-5 w-5 text-primary" /> : <Share2 className="h-5 w-5" />}
        </button>

        {/* Logo in circle with pulse ring */}
        <div
          className="relative mt-6 flex h-32 w-32 items-center justify-center rounded-full p-1.5"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "var(--shadow-glow)",
            animation: "fade-up 0.6s ease-out",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: "var(--gradient-brand)",
              opacity: 0.35,
              animation: "pulse-ring 3s ease-out infinite",
            }}
          />
          <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full"
            style={{ background: "var(--gradient-surface)" }}
          >
            <img
              src="/logo.png"
              alt="Web Area"
              className="h-[78%] w-[78%] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Brand name + verified */}
        <div
          className="mt-6 flex items-center gap-2"
          style={{ animation: "fade-up 0.7s ease-out" }}
        >
          <h1
            className="text-3xl font-black tracking-tight"
            style={{
              backgroundImage: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Web Area
          </h1>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
            aria-label="موثّق"
          >
            ✓
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mt-3 max-w-xs text-center text-sm leading-relaxed text-muted-foreground"
          style={{ animation: "fade-up 0.8s ease-out" }}
        >
          نبني حضورك الرقمي — من صفحة هبوط تخطف الأنظار إلى نظام ERP يدير شركتك بالكامل.
        </p>

        {/* Meta chips */}
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs"
          style={{ animation: "fade-up 0.9s ease-out" }}
        >
          {["Landing", "E-Commerce", "ERP", "Portfolio"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card/40 px-3 py-1 text-muted-foreground backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <nav className="mt-10 flex w-full flex-col gap-3.5" aria-label="روابط Web Area">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target={link.target ?? "_blank"}
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-4 text-right backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              style={{
                boxShadow: "var(--shadow-card)",
                animation: `fade-up 0.8s ease-out ${1 + i * 0.1}s both`,
              }}
            >
              {/* Hover gradient sheen */}
              <span
                aria-hidden
                className={`absolute inset-0 -z-0 bg-gradient-to-l ${link.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Icon */}
              <span
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-brand)" }}
              >
                {link.icon}
              </span>

              {/* Text */}
              <span className="relative flex-1">
                <span className="block text-base font-bold text-foreground">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {link.sublabel}
                </span>
              </span>

              {/* Arrow */}
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground transition-all duration-300 group-hover:-translate-x-1 group-hover:border-primary/60 group-hover:text-primary">
                <ArrowUpLeft className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://web-area-a.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "var(--shadow-btn)",
            animation: "fade-up 0.8s ease-out 1.3s both",
          }}
        >
          <span>ابدأ مشروعك معنا الآن</span>
          <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2.8} />
        </a>

        {/* Footer */}
        <footer
          className="mt-10 flex flex-col items-center gap-1 text-xs text-muted-foreground/70"
          style={{ animation: "fade-up 0.8s ease-out 1.5s both" }}
        >
          <span>© {new Date().getFullYear()} Web Area — كل الحقوق محفوظة</span>
          <span className="flex items-center gap-1.5">
            صُنع بـ <span className="text-blue-400">♥</span> في مصر
          </span>
        </footer>
      </div>
    </main>
  );
}
