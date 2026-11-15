// Fallback Instagram posts, shown when no live feed is configured.
// For a live feed, set BEHOLD_FEED_URL in Netlify (see README) and rebuild on a schedule.
import type { ImageMetadata } from 'astro';

import champions from '../assets/instagram/DLe3QZJJuKN.jpg';
import action from '../assets/instagram/Dfl2WlaiaRA.jpg';
import francese from '../assets/instagram/DfocPEUmYC0.jpg';
import round5 from '../assets/instagram/Dfgt9Z-vKg6.jpg';
import u10 from '../assets/instagram/DEjGY3AyVj2.jpg';
import grasselli from '../assets/instagram/DfWXYqVCX57.jpg';

export type Post = {
  url: string;
  image: ImageMetadata | string;
  alt: string;
  caption: string;
  date: string; // ISO date
};

const base = 'https://www.instagram.com/adelaidefutsalclub/p/';

export const fallbackPosts: Post[] = [
  {
    url: base + 'Dfl2WlaiaRA/',
    image: action,
    alt: 'A Lions player in the orange kit on the ball',
    caption: 'Matchday through the lens of @captured_by_garreff.',
    date: '2026-11-10',
  },
  {
    url: base + 'DfocPEUmYC0/',
    image: francese,
    alt: 'Nicholas Francese in his NPL kit',
    caption:
      'Throwback Thursday: Nicholas Francese, from our program to NPL champion. 22 goals in 7 games at the U16 Junior Nationals.',
    date: '2026-11-11',
  },
  {
    url: base + 'Dfgt9Z-vKg6/',
    image: round5,
    alt: 'A Lions junior team posing in front of the goal',
    caption: 'Round 5 results: Senior Men edge Ezio FC 4–3, U13 Orange put 12 past KSM White.',
    date: '2026-11-08',
  },
  {
    url: base + 'DfWXYqVCX57/',
    image: grasselli,
    alt: 'Max Grasselli in the Lions orange kit',
    caption: 'Throwback Thursday: Max Grasselli, and the value of saying yes.',
    date: '2026-11-04',
  },
  {
    url: base + 'DLe3QZJJuKN/',
    image: champions,
    alt: 'Lions senior squad celebrating with the Division 1 trophy',
    caption: 'History made. Our seniors are Futsal SA Division 1 Champions for the first time.',
    date: '2025-06-29',
  },
  {
    url: base + 'DEjGY3AyVj2/',
    image: u10,
    alt: 'Under 10 players celebrating with their coaches',
    caption: 'The most dominant campaign in Futsal Oz Nationals history. U10 National Champions.',
    date: '2025-01-07',
  },
];

type BeholdPost = {
  permalink: string;
  mediaType: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: { medium?: { mediaUrl: string } };
  caption?: string;
  prunedCaption?: string;
  timestamp: string;
};

/** Fetches the live feed at build time, falling back to the curated posts. */
export async function getPosts(limit = 6): Promise<Post[]> {
  const feedUrl = import.meta.env.BEHOLD_FEED_URL;
  if (!feedUrl) return fallbackPosts.slice(0, limit);
  try {
    const res = await fetch(feedUrl);
    if (!res.ok) throw new Error(`Feed returned ${res.status}`);
    const data = await res.json();
    const list: BeholdPost[] = Array.isArray(data) ? data : data.posts ?? [];
    const posts = list
      .map((p) => ({
        url: p.permalink,
        image: p.sizes?.medium?.mediaUrl ?? p.thumbnailUrl ?? p.mediaUrl ?? '',
        alt: 'Instagram post from Adelaide Lions Futsal Club',
        caption: (p.prunedCaption ?? p.caption ?? '').split('\n')[0].slice(0, 160),
        date: p.timestamp,
      }))
      .filter((p) => p.image);
    return posts.length ? posts.slice(0, limit) : fallbackPosts.slice(0, limit);
  } catch (err) {
    console.warn('[instagram] live feed unavailable, using fallback posts:', err);
    return fallbackPosts.slice(0, limit);
  }
}
