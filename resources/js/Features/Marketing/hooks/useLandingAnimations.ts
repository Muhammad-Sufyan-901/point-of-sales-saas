import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Required CSS class selectors that GSAP targets inside the landing page.
 * If any are missing from the container DOM, the hook throws immediately
 * so the developer gets actionable feedback instead of silent no-ops.
 */
const REQUIRED_SELECTORS = [
  '.hero-anim',
  '.showcase-trigger',
  '.showcase-anim',
] as const;

/**
 * Orchestrates all GSAP entrance animations for the Marketing landing page.
 *
 * - Hero elements (`.hero-anim`) fade-in on first load.
 * - Showcase section (`.showcase-anim`) reveals on scroll via ScrollTrigger.
 *
 * @param containerRef - Ref to the outermost DOM node that scopes GSAP queries.
 */
export function useLandingAnimations(
  containerRef: React.RefObject<HTMLElement | null>,
): void {
  React.useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // ── Fail-fast: verify every animation target exists ──────────
    for (const selector of REQUIRED_SELECTORS) {
      const matches = container.querySelectorAll(selector);

      if (matches.length === 0) {
        throw new Error(
          `[useLandingAnimations] GSAP Animation Error: Required class '${selector}' ` +
            'not found inside container. Did you forget to add it to a child component?',
        );
      }
    }

    // ── Animations ───────────────────────────────────────────────
    const context = gsap.context(() => {
      // On First Load
      gsap.from('.hero-anim', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // On Scroll
      gsap.from('.showcase-anim', {
        scrollTrigger: {
          trigger: '.showcase-trigger',
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });
    }, container);

    return () => context.revert();
  }, [containerRef]);
}
