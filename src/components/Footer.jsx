import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  MapPin,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(key);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-border px-6 md:px-10 py-16 md:py-20 bg-bg transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Footer Information Columns ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Column 1: Brand & Bio */}
          <div>
            <p className="font-display font-bold text-2xl tracking-tight mb-3 flex items-center gap-2">
              <span>JATIN</span>
              <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle border border-border px-1.5 py-0.5 rounded">BANSAL</span>
            </p>
            <p className="text-fg-muted text-sm leading-relaxed mb-4">
              Digital Marketing Enthusiast &amp; Performance Marketer. Executing data-driven Google &amp; Meta Ads, SEO, and growth strategies.
            </p>
            <div className="space-y-1 text-xs text-fg-subtle">
              <p className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Open to Opportunities</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-fg-subtle" />
                <span>Faridabad, Haryana, India · Remote &amp; On-site</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4 font-mono">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-fg-muted text-sm hover:text-fg transition-colors duration-300 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Direct Contact Details */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4 font-mono">
              Contact &amp; Connect
            </p>
            <div className="flex flex-col gap-3.5 text-sm">
              {/* Email with copy */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-border bg-bg-elevated/40">
                <a
                  href="mailto:bjatin594@gmail.com"
                  className="text-fg font-medium hover:text-fg-muted transition-colors text-xs sm:text-sm break-all flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-fg-subtle shrink-0" />
                  <span>bjatin594@gmail.com</span>
                </a>
                <button
                  onClick={() => copyToClipboard('bjatin594@gmail.com', 'email')}
                  title="Copy email address"
                  className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors shrink-0 flex items-center gap-1"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-accent" />
                      <span className="text-[10px] text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone with copy & call */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-border bg-bg-elevated/40">
                <a
                  href="tel:+919871395904"
                  className="text-fg font-medium hover:text-fg-muted transition-colors text-xs sm:text-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-fg-subtle shrink-0" />
                  <span>+91 9871395904</span>
                </a>
                <div className="flex items-center gap-1">
                  <a
                    href="https://wa.me/919871395904?text=Hi%20Jatin,%20I%20saw%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-accent" />
                    <span className="text-[10px]">Chat</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard('+919871395904', 'phone')}
                    title="Copy phone number"
                    className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors flex items-center gap-1"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-3 h-3 text-accent" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>

              {/* Links & Resume */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://nexigos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <span>nexigos.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-fg-subtle">·</span>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fg-subtle text-xs">
            © {currentYear} Jatin Bansal. All rights reserved.
          </p>
          <p className="text-fg-subtle text-xs">
            Digital Marketing &amp; Growth Portfolio · Faridabad, Haryana, India
          </p>
        </div>
      </div>
    </footer>
  );
}
