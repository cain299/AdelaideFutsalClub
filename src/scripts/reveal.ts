// Fades content in as it scrolls into view.
// Hidden styles live in global.css under `.js-reveal`, which is only set when motion is allowed.

/** Must match the selector list in global.css. */
export const REVEAL_SELECTOR = [
  '.page-head .wrap > *',
  '.section-head',
  '.feed .head',
  '.scoreboard .head',
  '.split > *',
  '.story > *',
  '.contact > *',
  '.become > *',
  '.faq-wrap > h2',
  '.faqs details',
  '.join .inner > *',
  '.scoreboard .games',
  '.feed .grid > li',
  '.pathway > li',
  '.wall > li',
  '.titles > li',
  '.stages > li',
  '.timeline > li',
  '.values > div',
  '.alumni > li',
  '.offers > li',
  '.groups > .group',
].join(',');

export function initReveal() {
  const root = document.documentElement;
  if (!root.classList.contains('js-reveal')) return;

  const items = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

  // Stagger siblings that reveal together (grid items), capped so long lists don't drag.
  for (const el of items) {
    const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
    const index = siblings.indexOf(el);
    el.style.setProperty('--reveal-i', String(Math.min(index, 5)));
  }

  const pending = new Set<Element>(items);
  const show = (el: Element) => {
    el.classList.add('is-visible');
    pending.delete(el);
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) show(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => observer.observe(el));

  // A jump straight past an element (anchor link, fast scroll, find-in-page) never makes it
  // intersect, so the observer stays silent. Reveal anything that is now above the fold.
  let ticking = false;
  const sweep = () => {
    ticking = false;
    for (const el of pending) {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    }
    if (pending.size === 0) window.removeEventListener('scroll', onScroll);
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(sweep);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
