import * as React from 'react'
import { blocks } from 'api/mock'
import ArticleCard from './ArticleCard'

export default {
  title: 'Blocks/ArticleCard',
  component: ArticleCard,
}

const Template = (args) => <ArticleCard {...args} />

export const Default = Template.bind({})
Default.args = blocks.ArticleCard
