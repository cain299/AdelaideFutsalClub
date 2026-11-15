// Pathway stages and current teams.
// Teams list is taken from the club's 2026 round results on Instagram.
// TODO(confirm with club): training days, times and venue.

export const pathway = [
  {
    stage: 'Mini Lions',
    ages: 'Under 6 to Under 8',
    summary:
      'First touches of the ball. Fun games that build coordination, confidence and a love of playing.',
  },
  {
    stage: 'Junior Lions',
    ages: 'Under 9 to Under 13',
    summary:
      'Technique under pressure. Players learn the positions, the rotations and how to read the game.',
  },
  {
    stage: 'Youth Lions',
    ages: 'Under 14 to Under 16',
    summary:
      'Competitive league football, Futsal Oz Junior Nationals and the step towards state selection.',
  },
  {
    stage: 'Senior Lions',
    ages: 'Open age',
    summary:
      'Futsal SA league football, and the 2025 Division 1 champions.',
  },
];

export const teams = [
  { name: 'Senior Men', group: 'Seniors' },
  // TODO(confirm): add Senior Women if a team is entered this season.
  { name: 'U15 Mixed', group: 'Youth' },
  { name: 'U14 Mixed', group: 'Youth' },
  { name: 'U13 Orange', group: 'Juniors' },
  { name: 'U13 Black', group: 'Juniors' },
  { name: 'U13 Girls', group: 'Girls' },
  { name: 'U12 Orange', group: 'Juniors' },
  { name: 'U12 Black', group: 'Juniors' },
  { name: 'U12 Girls', group: 'Girls' },
  { name: 'U11 Mixed', group: 'Juniors' },
  { name: 'U10 Mixed', group: 'Juniors' },
  { name: 'U9 Orange', group: 'Juniors' },
  { name: 'U9 Black', group: 'Juniors' },
  { name: 'U8 Mixed', group: 'Mini Lions' },
] as const;

// Latest round, shown as the scoreboard strip on the home page.
export const latestRound = {
  label: 'Round 5',
  sponsor: 'Cafe Va Bene',
  results: [
    { team: 'Senior Men', us: 4, them: 3, opponent: 'Ezio FC' },
    { team: 'U15 Mixed', us: 5, them: 1, opponent: 'Adelaide Celtic' },
    { team: 'U13 Orange', us: 12, them: 4, opponent: 'KSM White' },
    { team: 'U12 Orange', us: 9, them: 3, opponent: 'Prime Football' },
    { team: 'U11 Mixed', us: 11, them: 4, opponent: 'Retro Stars FC' },
    { team: 'U13 Girls', us: 2, them: 3, opponent: 'Golden Goal' },
    { team: 'U10 Mixed', us: 3, them: 4, opponent: 'Cobras' },
    { team: 'U12 Girls', us: 4, them: 8, opponent: 'Gladiators' },
  ],
};
