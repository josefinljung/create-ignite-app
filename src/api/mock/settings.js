const subLinks = Array.from(new Array(8), (_, idx) => ({
  label: `Link ${idx + 1}`,
  url: `/link-${idx + 1}`,
}))
export const menuSecondary = [
  {
    label: 'Womens',
    url: '/women',
  },
  {
    label: 'Mens',
    links: subLinks,
    url: '/men',
  },
  {
    label: 'Young Riders',
    links: subLinks,
    url: '/shoes',
  },
  {
    label: 'Horses',
    links: subLinks,
    url: '/horses',
  },
  {
    label: 'Accessories',
    links: subLinks,
    url: '/accessories',
  },
  {
    label: 'Christmas gift',
    url: '/christmas-gift',
  },
]

export const menuFooter = [
  {
    label: 'Work',
    url: '/work',
  },
  {
    label: 'News',
    url: '/news',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'About',
    url: '/about',
  },
]

export default {
  menus: {
    secondary: menuSecondary,
    footer: menuFooter,
  },
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  pinterestUrl: 'https://www.pinterest.com/',
  storeMessage: 'lorem ipsum dolor sit amet, consectetur',
  termsPageUrl: '/terms-and-conditions',
  twitterUrl: 'https://twitter.com/',
}
