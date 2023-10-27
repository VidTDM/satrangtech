import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Products',
      href: getPermalink('/products'),
    },
    {
      text: 'Clients',
      href: getPermalink('/clients'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/company/about-us'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/company/contact'),
        },
        {
          text: 'Careers',
          href: getPermalink('/company/careers'),
        },
      ],
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      title: 'Products',
      links: [
        {
          text: 'Products',
          href: getPermalink('/products'),
        },
      ],
    },
    {
      title: 'Clients',
      links: [
        {
          text: 'Clients',
          href: getPermalink('/clients'),
        },
      ],
    },
    {
      title: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/company/about-us'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/company/contact'),
        },
        {
          text: 'Careers',
          href: getPermalink('/company/careers'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Refund Policy', href: getPermalink('/refund') },
    { text: 'T&C', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Upwork', icon: 'tabler:brand-upwork', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/satrangtech' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/satrangtech' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://in.linkedin.com/company/satrangtech' },
  ],
  footNote: `<small class="text-muted"><b>Disclosure:</b> Salesforce, Force.com, Sales Cloud, Service Cloud,Chatter, AppExchange, and others are trademarks of salesforce.com, inc. andare used here with permission. Other than being a salesforce.com registeredpartner in good standing, Satrang Technologies is not endorsed, authorized,or otherwise affiliated with salesforce.com, inc. © 2012-2023, SatrangTechnologies Private Limited. All rights reserved.</small>`,
};
