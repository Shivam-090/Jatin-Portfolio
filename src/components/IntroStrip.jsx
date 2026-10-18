import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, BarChart3, Target, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const introText =
  "Hi, I'm Jatin Bansal — an aspiring marketing professional pursuing a BBA degree with a passion for digital marketing, performance advertising, and business growth. I specialize in executing and optimizing real-world Google Ads and Meta Ads campaigns, Search Engine Optimization (SEO), Social Media Marketing (SMM), and conversion-driven website creation. With hands-on internship experience delivering qualified leads in real estate, analyzing performance data, and exploring AI-driven tools, I blend creative strategy with analytical thinking to drive organizational growth and maximize campaign ROI.";

export default function IntroStrip() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const words = introText.split(' ');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        gsap.set('.intro-word', { opacity: 1 });
        return;
      }

      /* Progressive scroll-scrub word reveal anchored to the text itself */
      gsap.fromTo(
        '.intro-word',
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.03,
          ease: 'none',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 78%',
            end: 'bottom 45%',
            scrub: 0.3,
          },
        }
      );

      /* Subtle entrance for the right design card */
      gsap.from('.intro-card', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ── Left Column: Progressive Scroll-Scrub Text ── */}
        <div className="lg:col-span-7 xl:col-span-8">
          <p
            ref={textRef}
            className="intro-paragraph font-display text-base sm:text-lg md:text-xl lg:text-[1.32rem] font-medium leading-[1.7] tracking-tight"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="intro-word inline-block mr-[0.28em] text-fg opacity-20 will-change-[opacity]"
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* ── Right Column: Digital Marketing Performance & Growth Card ── */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
          <div className="intro-card w-full max-w-[340px] rounded-2xl bg-bg-elevated border border-border p-5 shadow-xl shadow-black/5 dark:shadow-black/30 rotate-1 sm:rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 ease-out select-none">
            {/* Card Header: Live Campaign Status */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border/80">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-fg tracking-tight">Active Growth Engine</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
                Google &amp; Meta
              </span>
            </div>

            {/* Primary Metric Banner: High-Impact ROAS */}
            <div className="mb-4 p-3 rounded-xl bg-bg border border-border/70 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-fg-subtle mb-0.5">Average Return On Ad Spend</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-extrabold text-fg tracking-tight">4.8x</span>
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +38% ROAS
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BarChart3 className="w-4 h-4" />
              </div>
            </div>

            {/* 2x2 Metric Breakdown */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <div className="p-2.5 rounded-lg bg-bg/60 border border-border/60">
                <p className="text-[10px] font-mono text-fg-subtle uppercase">Target CTR</p>
                <p className="text-sm font-bold text-fg mt-0.5">4.6% <span className="text-[10px] font-normal text-emerald-600 dark:text-emerald-400">High</span></p>
                <p className="text-[9px] text-fg-subtle mt-0.5">Search &amp; Display</p>
              </div>

              <div className="p-2.5 rounded-lg bg-bg/60 border border-border/60">
                <p className="text-[10px] font-mono text-fg-subtle uppercase">Cost / Lead</p>
                <p className="text-sm font-bold text-fg mt-0.5">-35% <span className="text-[10px] font-normal text-accent">Optimized</span></p>
                <p className="text-[9px] text-fg-subtle mt-0.5">Real Estate Funnels</p>
              </div>

              <div className="p-2.5 rounded-lg bg-bg/60 border border-border/60">
                <p className="text-[10px] font-mono text-fg-subtle uppercase">Strategy</p>
                <p className="text-sm font-bold text-fg mt-0.5">SEO &amp; SMM</p>
                <p className="text-[9px] text-fg-subtle mt-0.5">Keyword Intent Mapping</p>
              </div>

              <div className="p-2.5 rounded-lg bg-bg/60 border border-border/60">
                <p className="text-[10px] font-mono text-fg-subtle uppercase">Automation</p>
                <p className="text-sm font-bold text-fg mt-0.5">AI-Powered</p>
                <p className="text-[9px] text-fg-subtle mt-0.5">Smart Bidding &amp; Testing</p>
              </div>
            </div>

            {/* Platform tags */}
            <div className="pt-3 border-t border-border/70 flex flex-wrap gap-1.5 mb-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border bg-bg text-fg-muted">Google Ads</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border bg-bg text-fg-muted">Meta Ads</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border bg-bg text-fg-muted">GA4 Analytics</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border bg-bg text-fg-muted">WordPress</span>
            </div>

            {/* Card footer / Live status */}
            <div className="pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-fg-subtle">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Opportunities</span>
              </span>
              <span>Faridabad, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
