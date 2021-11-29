import blocks from './blocks'

export default {
  Home: {
    headerMode: 'auto',
    children: [
      // {
      //   name: 'Hero',
      //   props: blocks.Hero,
      // },
      {
        name: 'Video',
        props: blocks.Video,
      },
      {
        name: 'ScrollingBanner',
        props: blocks.ScrollingBanner,
      },
      {
        name: 'NewBlock',
        props: blocks.NewBlock,
      },
      {
        name: 'ArticleSlideshow',
        props: blocks.ArticleSlideshow,
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
