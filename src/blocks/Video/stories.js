import * as React from 'react'
import { blocks } from 'api/mock'
import Video from './Video'

export default {
  title: 'Blocks/Video',
  component: Video,
}

const Template = (args) => <Video {...args} />

export const Default = Template.bind({})
Default.args = blocks.ArticleSlideshow
