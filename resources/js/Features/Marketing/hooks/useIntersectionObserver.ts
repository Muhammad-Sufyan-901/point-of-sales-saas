import React from 'react';

/**
 * The target(s) to observe. Accepts:
 * - A CSS selector string (e.g. `"section[id]"`)
 * - A single `Element`
 * - An array of `Element`s
 * - A `NodeListOf<Element>`
 * - A React `RefObject<Element | null>`
 */
export type ObserverTarget =
  | Element
  | Element[]
  | NodeListOf<Element>
  | React.RefObject<Element | null>
  | string;

/**
 * A polymorphic Intersection Observer hook that can observe one or many
 * elements resolved from a variety of target types.
 *
 * @param target   - What to observe (CSS selector, ref, element(s), NodeList).
 * @param callback - Fires for every observed entry with handy positional args.
 * @param options  - Standard `IntersectionObserverInit`. Defaults use a
 *                   top/bottom offset so the "active" section feels natural
 *                   while scrolling.
 */
export function useIntersectionObserver(
  target: ObserverTarget,
  callback: (
    target: Element,
    isIntersecting: boolean,
    entry: IntersectionObserverEntry,
  ) => void,
  options: IntersectionObserverInit = { rootMargin: '-20% 0px -60% 0px' },
): void {
  React.useEffect(() => {
    const getElements = (): Element[] => {
      if (!target) {
        return [];
      }

      if (typeof target === 'string') {
        return Array.from(document.querySelectorAll(target));
      }

      if (target instanceof Element) {
        return [target];
      }

      if (target instanceof NodeList) {
        return Array.from(target);
      }

      if (Array.isArray(target)) {
        return target.filter(
          (item): item is Element => item instanceof Element,
        );
      }

      if ('current' in target && target.current instanceof Element) {
        return [target.current];
      }

      return [];
    };

    const elements = getElements();

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        callback(entry.target, entry.isIntersecting, entry),
      );
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [target, callback, options]);
}
