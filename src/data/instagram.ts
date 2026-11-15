// Instagram posts for "Latest from the Lions".
// The first post is shown large. With BEHOLD_FEED_URL set (see README) the live feed is used instead.
import type { ImageMetadata } from 'astro';

import action from '../assets/photos/action-1.jpg';
import francese from '../assets/photos/francese.jpg';
import round5 from '../assets/photos/round5-team.jpg';
import grasselli from '../assets/photos/grasselli-1.jpg';
import u10 from '../assets/photos/u10-champions-3.jpg';

export type Post = {
  url: string;
  image: ImageMetadata | string;
  alt: string;
  tag: string;
  caption: string;
  date: string; // ISO date
};

const base = 'https://www.instagram.com/adelaidefutsalclub/p/';

export const fallbackPosts: Post[] = [
  {
    url: base + 'Dfl2WlaiaRA/',
    image: action,
    alt: 'A Lions player in the orange and black kit running onto the ball',
    tag: 'Matchday',
    caption: 'Sunday on court with the Lions.',
    date: '2026-11-10',
  },
  {
    url: base + 'DfocPEUmYC0/',
    image: francese,
    alt: 'Nicholas Francese on the ball in his NPL kit',
    tag: 'Throwback Thursday',
    caption: 'Nicholas Francese: from our junior program to NPL champion, via 22 goals in 7 games at the U16 Nationals.',
    date: '2026-11-11',
  },
  {
    url: base + 'Dfgt9Z-vKg6/',
    image: round5,
    alt: 'A Lions junior team lined up in front of the goal',
    tag: 'Results',
    caption: 'Round 5: Senior Men edge Ezio FC 4–3 and U13 Orange put 12 past KSM White.',
    date: '2026-11-08',
  },
  {
    url: base + 'DfWXYqVCX57/',
    image: grasselli,
    alt: 'Max Grasselli in the Lions orange kit with a young player holding a trophy',
    tag: 'Throwback Thursday',
    caption: 'Max Grasselli, and the value of saying yes.',
    date: '2026-11-04',
  },
  {
    url: base + 'DEjGY3AyVj2/',
    image: u10,
    alt: 'Under 10 players with their national championship medals',
    tag: 'Nationals',
    caption: 'U10 Futsal Oz National Champions. The most dominant campaign in the tournament’s history.',
    date: '2025-01-07',
  },
];

type BeholdPost = {
  permalink: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: { medium?: { mediaUrl: string }; large?: { mediaUrl: string } };
  caption?: string;
  prunedCaption?: string;
  timestamp: string;
};

/** Guesses a short label from the caption, matching the club's regular post series. */
function tagFor(caption: string): string {
  const c = caption.toLowerCase();
  if (c.includes('throwback')) return 'Throwback Thursday';
  if (c.includes('weekly honours')) return 'Weekly Honours';
  if (c.includes('results')) return 'Results';
  if (c.includes('sponsor')) return 'Partners';
  return 'Club news';
}

/** Fetches the live feed at build time, falling back to the curated posts. */
export async function getPosts(limit = 5): Promise<Post[]> {
  const feedUrl = import.meta.env.BEHOLD_FEED_URL;
  if (!feedUrl) return fallbackPosts.slice(0, limit);
  try {
    const res = await fetch(feedUrl);
    if (!res.ok) throw new Error(`Feed returned ${res.status}`);
    const data = await res.json();
    const list: BeholdPost[] = Array.isArray(data) ? data : data.posts ?? [];
    const posts = list
      .map((p) => {
        const caption = (p.prunedCaption ?? p.caption ?? '').split('\n')[0].slice(0, 160);
        return {
          url: p.permalink,
          image: p.sizes?.large?.mediaUrl ?? p.sizes?.medium?.mediaUrl ?? p.thumbnailUrl ?? p.mediaUrl ?? '',
          alt: 'Instagram post from Adelaide Lions Futsal Club',
          tag: tagFor(p.caption ?? ''),
          caption,
          date: p.timestamp,
        };
      })
      .filter((p) => p.image);
    return posts.length ? posts.slice(0, limit) : fallbackPosts.slice(0, limit);
  } catch (err) {
    console.warn('[instagram] live feed unavailable, using fallback posts:', err);
    return fallbackPosts.slice(0, limit);
  }
}
