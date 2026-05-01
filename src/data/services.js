import { icons } from './icons.js';

// ─── Core dialysis treatments ──────────────────────────────────
// Each entry maps to one of the three illustrated service cards.
// `illustration` key matches the lookup object in Services.astro.

export const DIALYSIS_TREATMENTS = [
  {
    badge: '01 / hemodialysis',
    illustration: 'monitor',
    icon: icons.pulse,
    title: 'Hemodialysis',
    desc: 'Involves cleansing the blood by circulating it outside of the body through a machine equipped with a special filter — performed in our center with continuous medical supervision.',
    bullets: [
      'Continuous medical supervision',
      'Advanced filtration technology',
      'Coordinated with your care team',
    ],
  },
  {
    badge: '02 / home dialysis',
    illustration: 'home',
    icon: icons.home,
    title: 'Home Dialysis',
    desc: 'Comprehensive training for patients and caregivers, with continuous safety support for at-home treatment — giving you greater flexibility and independence.',
    bullets: [
      'Comprehensive patient & caregiver training',
      'Continuous safety monitoring support',
      '24/7 nurse support line',
    ],
  },
  {
    badge: '03 / peritoneal',
    illustration: 'care',
    icon: icons.drop,
    title: 'Peritoneal Dialysis',
    desc: "Uses the lining of your abdominal cavity (the peritoneum) and a cleaning solution (dialysate) to filter waste — performed at home for greater autonomy.",
    bullets: [
      'Performed at home on your schedule',
      "Uses your body's natural peritoneum",
      'Greater lifestyle flexibility',
    ],
  },
];

// ─── Support services ──────────────────────────────────────────
export const SUPPORT_SERVICES = [
  {
    icon: icons.shield,
    title: 'Insurance & Financial',
    desc: 'We accept multiple insurance plans and provide counseling to help patients understand benefits and locate financial aid resources.',
  },
  {
    icon: icons.spark,
    title: 'Prescription Management',
    desc: 'We coordinate with your healthcare providers to maintain current prescriptions and offer medication education for informed self-care.',
  },
  {
    icon: icons.pin,
    title: 'Travel Support',
    desc: 'We assist patients in scheduling treatments around travel plans, including arrangements at destination clinics so you never miss a session.',
  },
  {
    icon: icons.call,
    title: 'Emergency Services',
    desc: 'Round-the-clock emergency services with immediate care availability — rapid response, compassionate care, whenever you need it.',
  },
];
