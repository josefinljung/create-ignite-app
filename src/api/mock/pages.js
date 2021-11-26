import blocks from './blocks'

export default {
  Home: {
    headerMode: 'auto',
    children: [
      {
        name: 'Hero',
        props: blocks.Hero,
      },
      {
        name: 'ScrollingBanner',
        props: blocks.ScrollingBanner,
      },
      {
        name: 'ArticleSlideshow',
        props: blocks.ArticleSlideshow,
      },
      {
        name: 'NewBlock',
        props: blocks.NewBlock,
      },
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
