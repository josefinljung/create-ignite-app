import * as React from 'react'
import { blocks } from 'api/mock'
import Marquee from './Marquee'

export default {
  title: 'Blocks/Marquee',
  component: Marquee,
}

const Template = (args) => <Marquee {...args} />

export const Default = Template.bind({})
Default.args = blocks.Marquee
