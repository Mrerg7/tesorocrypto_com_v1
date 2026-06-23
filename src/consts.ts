export const SITE = {
  name: 'tesorocrypto.com',
  title: 'Tesorocrypto.com • Crypto Treasure | Premium Domain for Sale',
  description:
    'Tesorocrypto.com — The premium .com domain meaning "Crypto Treasure". A powerful, brandable asset for the next generation of wealth-building platforms in cryptocurrency, DeFi, and digital assets. Now available for acquisition.',
  url: 'https://tesorocrypto.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-01',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring tesorocrypto.com. Please share availability, terms, and next steps.\n\n— ',
)}`;
