import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { SITE_NAME } from 'utils/constants'
import { createRenderBlock } from 'utils'
import * as blockVariants from 'blocks'

const renderBlock = createRenderBlock(blockVariants)

function Page({ page }) {
  return (
    <>
      <Head>
        <title>Page | {SITE_NAME}</title>
      </Head>

      {page.blocks.map(renderBlock)}
    </>
  )
}

Page.propTypes = {
  page: PropTypes.object,
}

export const getStaticProps = async (context) => {
  const uri = context.params.uri.pop()

  const response = await fetch(`https://cms.nudient.com/wp-json/wp/v2/pages?slug=${uri}`)
  const results = await response.json()

  return {
    props: {
      page: results[0],
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default Page
