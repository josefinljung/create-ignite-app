import * as React from 'react'
import { blocks } from 'api/mock'
import PromoCardSlideshow from './PromoCardSlideshow'

export default {
  title: 'Blocks/PromoCardSlideshow',
  component: PromoCardSlideshow,
}

const Template = (args) => <PromoCardSlideshow {...args} />

export const Default = Template.bind({})
Default.args = blocks.PromoCardSlideshow
