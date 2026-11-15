// Current partners, as tagged in the club's 2026 Instagram posts.
// TODO(club): supply logo files (SVG or transparent PNG), tiers and website links.

export type Sponsor = { name: string; url?: string; award?: string; tier: 'major' | 'partner' };

export const sponsors: Sponsor[] = [
  { name: 'Cafe Va Bene', tier: 'major', award: 'Round results' },
  { name: 'Newtons Building & Landscape Supplies', tier: 'major', award: 'Coach of the Week' },
  { name: 'Knox Constructions', tier: 'partner', award: 'Youth Team of the Week' },
  { name: 'Mega Rewards', tier: 'partner', award: 'Goal of the Week' },
  { name: 'Social Space ADL', tier: 'partner', award: 'Player of the Week' },
  { name: 'Pasha & Leo', tier: 'partner', award: 'Save of the Week' },
  { name: "Carl's Jr", tier: 'partner', award: 'Senior of the Week' },
];
