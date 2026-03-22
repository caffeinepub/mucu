import { Separator } from "@/components/ui/separator";
import { Download, Instagram, Mail, Sparkles, Twitter } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const highlights = [
  { label: "Style", value: "Signature" },
  { label: "Aura", value: "Timeless" },
  { label: "Grace", value: "African" },
];

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside
        className="fixed inset-y-0 left-0 w-[280px] flex flex-col items-center shadow-sidebar z-20"
        style={{ background: "oklch(var(--sidebar-bg))" }}
        data-ocid="sidebar.panel"
      >
        {/* Gold accent line */}
        <div
          className="w-full h-[3px] flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--gold)), transparent)",
          }}
        />

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 w-[210px] relative flex-shrink-0"
        >
          <div
            className="absolute -inset-[3px] rounded-[18px]"
            style={{
              background:
                "linear-gradient(160deg, oklch(var(--gold)), oklch(var(--sidebar-bg-deep)), oklch(var(--gold-muted)))",
            }}
          />
          <img
            src="/assets/generated/Mucu-edited-v3.dim_950x1200.png"
            alt="Mucu portrait"
            className="relative w-full aspect-[3/4] object-cover object-top rounded-[16px]"
          />
        </motion.div>

        {/* Name + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-center px-6 flex-shrink-0"
        >
          <h1
            className="font-display text-4xl font-semibold tracking-wide"
            style={{ color: "oklch(var(--gold))" }}
          >
            Mucu
          </h1>
          <p
            className="mt-2 text-[10px] tracking-[0.28em] uppercase font-body font-light"
            style={{ color: "oklch(var(--sidebar-foreground) / 0.6)" }}
          >
            Style &middot; Elegance &middot; Presence
          </p>
        </motion.div>

        {/* Thin gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 w-16 h-[1px] flex-shrink-0"
          style={{ background: "oklch(var(--gold) / 0.4)" }}
        />

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 flex gap-4 flex-shrink-0"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 rounded-full transition-colors duration-200"
              style={{ color: "oklch(var(--sidebar-foreground) / 0.5)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(var(--gold))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(var(--sidebar-foreground) / 0.5)";
              }}
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-5 flex-shrink-0"
        >
          <a
            href="/assets/generated/Mucu-edited-v3.dim_950x1200.png"
            download="Mucu.png"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-widest uppercase font-body transition-all duration-200"
            style={{
              border: "1px solid oklch(var(--gold) / 0.4)",
              color: "oklch(var(--gold))",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(var(--gold) / 0.1)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "oklch(var(--gold))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "oklch(var(--gold) / 0.4)";
            }}
          >
            <Download size={13} strokeWidth={1.5} />
            Download Photo
          </a>
        </motion.div>

        {/* Bottom label */}
        <div className="mt-auto mb-5 text-center px-4 flex-shrink-0">
          <p
            className="text-[9px] tracking-widest uppercase font-body"
            style={{ color: "oklch(var(--sidebar-foreground) / 0.22)" }}
          >
            Personal Brand
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main
        className="ml-[280px] flex-1 min-h-screen bg-background flex flex-col"
        data-ocid="profile.section"
      >
        {/* Hero header */}
        <header
          className="px-12 pt-14 pb-10"
          style={{ borderBottom: "1px solid oklch(var(--divider))" }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase font-body mb-3"
            style={{ color: "oklch(var(--gold))" }}
          >
            Personal Profile
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-display text-5xl md:text-6xl font-semibold leading-tight text-foreground"
          >
            The Art of
            <br />
            <span style={{ color: "oklch(var(--gold))" }}>
              Living Beautifully
            </span>
          </motion.h2>
        </header>

        <div className="px-12 py-12 max-w-3xl flex-1">
          {/* Bio */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            aria-labelledby="bio-heading"
          >
            <div className="flex items-center gap-3 mb-5">
              <Sparkles
                size={15}
                strokeWidth={1.5}
                style={{ color: "oklch(var(--gold))" }}
              />
              <span
                className="text-[11px] tracking-[0.25em] uppercase font-body"
                style={{ color: "oklch(var(--gold))" }}
              >
                About
              </span>
            </div>
            <h3
              id="bio-heading"
              className="font-display text-2xl font-medium mb-5 text-foreground"
            >
              A Portrait of Grace &amp; Confidence
            </h3>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Mucu embodies the timeless intersection of African beauty and
              modern elegance. With a presence that commands every room she
              enters, she has cultivated a personal aesthetic rooted in
              heritage, warmth, and understated sophistication. Her style is not
              merely fashion — it is an extension of identity, a silent dialogue
              between tradition and the contemporary world.
            </p>
            <p
              className="font-body text-base leading-relaxed mt-4"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Whether draped in bold African prints or tailored minimalism, Mucu
              carries herself with a quiet confidence that inspires those around
              her. She believes beauty is cultivated from within — in the
              stories we tell, the values we uphold, and the grace with which we
              navigate life's every chapter.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="my-10"
          >
            <Separator style={{ background: "oklch(var(--divider))" }} />
          </motion.div>

          {/* Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="grid grid-cols-3 gap-5"
            aria-label="Highlights"
          >
            {highlights.map(({ label, value }) => (
              <div
                key={label}
                className="text-center px-4 py-6 rounded-xl"
                style={{
                  background: "oklch(var(--card))",
                  border: "1px solid oklch(var(--border))",
                }}
              >
                <p
                  className="font-display text-xl font-semibold"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {value}
                </p>
                <p
                  className="mt-1 text-[10px] tracking-[0.2em] uppercase font-body"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="my-10"
          >
            <Separator style={{ background: "oklch(var(--divider))" }} />
          </motion.div>

          {/* Signature quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="relative pl-8"
          >
            <div
              className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, oklch(var(--gold)), oklch(var(--gold-muted)))",
              }}
            />
            <p
              className="font-display text-xl italic leading-relaxed"
              style={{ color: "oklch(var(--foreground) / 0.72)" }}
            >
              &ldquo;Elegance is not about being noticed — it is about being
              remembered. Every step is intentional, every look is curated, and
              every moment is lived with purpose.&rdquo;
            </p>
            <footer
              className="mt-4 text-[11px] tracking-[0.25em] uppercase font-body"
              style={{ color: "oklch(var(--gold-muted))" }}
            >
              — Mucu
            </footer>
          </motion.blockquote>
        </div>

        {/* Footer */}
        <footer
          className="px-12 py-5 text-[11px] font-body mt-auto"
          style={{
            borderTop: "1px solid oklch(var(--divider))",
            color: "oklch(var(--muted-foreground) / 0.55)",
          }}
        >
          &copy; {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            caffeine.ai
          </a>
        </footer>
      </main>
    </div>
  );
}
