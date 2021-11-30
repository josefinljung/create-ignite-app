import * as React from 'react'
import { blocks } from 'api/mock'
import PromoCard from './PromoCard'

export default {
  title: 'Blocks/PromoCard',
  component: PromoCard,
}

const Template = (args) => <PromoCard {...args} />

export const Default = Template.bind({})
Default.args = blocks.PromoCard
