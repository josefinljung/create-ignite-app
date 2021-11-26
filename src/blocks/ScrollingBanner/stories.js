import * as React from 'react'
import { blocks } from 'api/mock'
import ScrollingBanner from './ScrollingBanner'

export default {
  title: 'Blocks/ScrollingBanner',
  component: ScrollingBanner,
}

const Template = (args) => <ScrollingBanner {...args} />

export const Default = Template.bind({})
Default.args = blocks.ScrollingBanner
