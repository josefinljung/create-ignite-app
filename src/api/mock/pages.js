import blocks from './blocks'

export default {
  Home: {
    headerMode: 'auto',
    children: [
      {
        name: 'Video',
        props: blocks.Video,
      },
      {
        name: 'Marquee',
        props: blocks.Marquee,
      },
      {
        name: 'ArticleCard',
        props: blocks.ArticleCard,
      },
      {
        name: 'PromoCardSlideshow',
        props: blocks.PromoCardSlideshow,
      },
      // {
      //   name: 'ArticleSlideshow',
      //   props: blocks.ArticleSlideshow,
      // },
    ],
  },
  Content: {
    children: [
      {
        name: 'Media',
        props: blocks.Media,
      },
      {
        name: 'Content',
        props: blocks.Content,
      },
    ],
  },
}
