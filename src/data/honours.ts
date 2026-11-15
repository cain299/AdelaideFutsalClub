// Club honours, newest first. Add a new season at the top.
// 2019–2024 are not on the old site or recent Instagram: TODO(confirm with club).

export type Season = {
  year: number;
  headline?: string;
  items: { title: string; detail?: string; major?: boolean }[];
};

export const honours: Season[] = [
  {
    year: 2025,
    headline: 'First Division 1 title',
    items: [
      { title: 'Futsal SA Division 1 Champions', detail: 'Senior Men', major: true },
      { title: 'Futsal Oz Junior Nationals Champions', detail: 'Under 10', major: true },
      // TODO(confirm): Instagram bio also lists a "2025 Summer" trophy.
    ],
  },
  {
    year: 2018,
    headline: 'National champions',
    items: [
      { title: 'Futsal Oz Junior Nationals Champions', detail: 'Under 12, undefeated', major: true },
      { title: 'Junior Nationals MVP', detail: 'Under 12, Matthew Maio' },
      { title: 'Junior Nationals Golden Boot', detail: 'Under 12, Liam DeCorso' },
      { title: 'Junior Nationals Golden Boot', detail: 'Under 16, Nicholas Francese' },
    ],
  },
  {
    year: 2017,
    items: [
      { title: 'Futsal Oz Junior Nationals Runners-up', detail: 'Under 12 and Under 14' },
      { title: 'Futsal SA Champions', detail: 'Under 14 and Under 15', major: true },
      { title: 'South Australian Futsal League Cup', detail: 'Under 15' },
      { title: 'Futsal SA MVP', detail: 'Under 14 Sam Russ, Under 15 Michael Cittadini' },
      { title: 'Junior Nationals Golden Boot', detail: 'Under 14, Michael Cittadini' },
    ],
  },
  {
    year: 2016,
    headline: 'First season',
    items: [
      { title: 'South Australian Futsal League Champions', detail: 'Under 12 and Under 14', major: true },
      { title: 'SAFL MVP and Golden Boot', detail: 'Under 12, Liam DeCorso' },
      { title: 'SAFL Golden Boot', detail: 'Under 14, Michael Cittadini' },
    ],
  },
];
