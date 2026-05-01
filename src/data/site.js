// ─── Global site configuration ────────────────────────────────
// Edit this file to update contact info, nav links, insurance
// plans, or trust bar partners across the entire site at once.

export const SITE = {
  name: 'Global Dialysis Care Center',
  shortName: 'Global Dialysis',
  tagline: 'Happiness begins with good health.',
  description:
    'Providing exceptional care and support to patients and their families through advanced, patient-centered dialysis treatments.',
  contact: {
    phone: '000 111 222',
    email: 'support@globaldialysiscare.com',
    address: '2710 NW 183rd St, Suite 200',
    city: 'Miami Gardens',
    state: 'FL',
    zip: '33056',
    hours: 'Mon, Wed, Fri · 8AM – 4PM',
  },
};

// ─── Primary navigation ────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'About',        href: '/#about' },
  { label: 'Services',     href: '/services' },
  { label: 'Patient Care', href: '/patient-care' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
];

// ─── Footer link columns (Contact column is built from SITE.contact) ──
export const FOOTER_COLUMNS = [
  {
    title: 'Care',
    links: [
      { label: 'Services',     href: '/services' },
      { label: 'Patient care', href: '/patient-care' },
      { label: 'New patients', href: '/contact' },
      { label: 'Insurance',    href: '/services#insurance' },
    ],
  },
  {
    title: 'Clinic',
    links: [
      { label: 'About us',  href: '/#about' },
      { label: 'Our team',  href: '/#about' },
      { label: 'Locations', href: '/contact' },
      { label: 'Careers',   href: '/contact' },
    ],
  },
];

// ─── Insurance & trust bar ─────────────────────────────────────
export const INSURANCE_PLANS = [
  'Medicare',
  'Medicaid',
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Kaiser',
];

export const TRUST_PARTNERS = [
  'Medicare',
  'Blue Cross',
  'Aetna',
  'Cigna',
  'United Health',
  'KDOQI',
];
