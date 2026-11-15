// Club-wide details. Edit here and every page updates.
// TODO(confirm with club): contacts below are from the old 2018 site.

export const site = {
  name: 'Adelaide Lions Futsal Club',
  shortName: 'Adelaide Lions',
  legalName: 'Adelaide Futsal Club',
  founded: 2015,
  tagline: 'Grassroots to seniors, since 2015.',
  description:
    'Adelaide Lions Futsal Club is a family club in Adelaide, South Australia, with teams from Under 6 to senior men and women. Futsal SA Division 1 Champions.',
  email: 'contact@adelaidefutsalclub.com.au',
  contacts: [
    { name: 'Michael Crescitelli', phone: '0401 892 367' },
    { name: 'Paul Maio', phone: '0422 233 370' },
  ],
  // Registration form linked from the club's Instagram bio.
  registerUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfAbnUSl4U-9b_O2q59OJjOrITv9Geh2f_KlI62W81yWTdoUA/viewform',
  registerLabel: 'Register for 2027',
};

export const socials = [
  { name: 'Instagram', handle: '@adelaidefutsalclub', url: 'https://www.instagram.com/adelaidefutsalclub/' },
  { name: 'Facebook', handle: 'adelaidefutsalclub', url: 'https://www.facebook.com/adelaidefutsalclub' },
  { name: 'Threads', handle: '@adelaidefutsalclub', url: 'https://www.threads.com/@adelaidefutsalclub' },
] as const;

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Teams', href: '/teams/' },
  { label: 'Honours', href: '/honours/' },
  { label: 'Sponsors', href: '/sponsors/' },
  { label: 'Contact', href: '/contact/' },
];
