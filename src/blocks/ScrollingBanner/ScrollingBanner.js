import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const ScrollingBannerRoot = styled('section', {
  name: 'ScrollingBanner',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  textTransform: 'uppercase',
})

const ScrollingBannerMain = styled('div', {
  name: 'ScrollingBanner',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

function ScrollingBanner(props) {
  const { heading } = props

  return (
    <ScrollingBannerRoot>
      <ScrollingBannerMain>
        <section>
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </section>
      </ScrollingBannerMain>
    </ScrollingBannerRoot>
  )
}

ScrollingBanner.propTypes = {
  heading: PropTypes.string,
}

export default ScrollingBanner
