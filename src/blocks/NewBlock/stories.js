import * as React from 'react'
import { blocks } from 'api/mock'
import NewBlock from './NewBlock'

export default {
  title: 'Blocks/NewBlock',
  component: NewBlock,
}

const Template = (args) => <NewBlock {...args} />

export const Default = Template.bind({})
Default.args = blocks.NewBlock
