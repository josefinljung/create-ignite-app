import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { SITE_NAME } from 'utils/constants'
// import { createRenderBlock } from 'utils'
// import * as blockVariants from 'blocks'

// const renderBlock = createRenderBlock(blockVariants)

function Page({ product }) {
  return (
    <>
      <Head>
        <title>Page | {SITE_NAME}</title>
      </Head>

      <h1>{product?.name}</h1>
      <p>{product.description}</p>
    </>
  )
}

Page.propTypes = {
  product: PropTypes.object,
}

export const getStaticProps = async (context) => {
  const uri = context.params.uri

  const response = await fetch('https://nudient.centra.com/api/checkout/2/uri', {
    method: 'POST',
    body: JSON.stringify({
      uri,
      for: ['product'],
    }),
  })
  const results = await response.json()

  return {
    props: {
      product: results.product,
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
