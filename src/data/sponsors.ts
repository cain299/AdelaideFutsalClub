// Current partners, as tagged in the club's 2026 Instagram posts.
// Logos are the partners' Instagram profile images (150 px).
// TODO(club): swap in vector logos (SVG) and add website links; supply a Pasha & Leo logo.
import type { ImageMetadata } from 'astro';

import cafeVaBene from '../assets/sponsors/cafe-va-bene.jpg';
import newtons from '../assets/sponsors/newtons.jpg';
import knox from '../assets/sponsors/knox-constructions.jpg';
import megaRewards from '../assets/sponsors/mega-rewards.jpg';
import socialSpace from '../assets/sponsors/social-space.jpg';
import carlsJr from '../assets/sponsors/carls-jr.jpg';

export type Sponsor = {
  name: string;
  logo?: ImageMetadata;
  instagram: string;
  award?: string;
  tier: 'major' | 'partner';
};

export const sponsors: Sponsor[] = [
  { name: 'Cafe Va Bene', logo: cafeVaBene, instagram: 'cafevabene', tier: 'major', award: 'Round results' },
  { name: 'Newtons', logo: newtons, instagram: 'newtonsbls', tier: 'major', award: 'Coach of the Week' },
  { name: 'Knox Constructions', logo: knox, instagram: 'knoxconstructions', tier: 'partner', award: 'Youth Team of the Week' },
  { name: 'Mega Rewards', logo: megaRewards, instagram: 'mega_rewards', tier: 'partner', award: 'Goal of the Week' },
  { name: 'Social Space ADL', logo: socialSpace, instagram: 'socialspaceadl', tier: 'partner', award: 'Player of the Week' },
  { name: "Carl's Jr", logo: carlsJr, instagram: 'carlsjrau', tier: 'partner', award: 'Senior of the Week' },
  { name: 'Pasha & Leo', instagram: 'pashaandleoptyltd', tier: 'partner', award: 'Save of the Week' },
];
