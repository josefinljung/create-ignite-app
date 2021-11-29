import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const ScrollingBannerRoot = styled('section', {
  name: 'ScrollingBanner',
  slot: 'Root',
})({
  position: 'relative',
  fontSize: '12px',
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
  // paddingLeft: 'var(--cia-container-spacing)',
  // paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
  lineHeight: '1',
  letterSpacing: '3px',
  fontWeight: '800',
})

function ScrollingBanner(props) {
  const { heading } = props

  return (
    <ScrollingBannerRoot>
      <ScrollingBannerMain>
        <Typography variant="h6">
          {/* <marquee
          direction="left"
          iteration-count="infinite"
          // animation-play-state="running"
          // play="running"
          // duration="378.086s"
          // delay="0s"
        >
          {heading}
        </marquee> */}
          {heading}
        </Typography>
      </ScrollingBannerMain>
    </ScrollingBannerRoot>
  )
}

ScrollingBanner.propTypes = {
  heading: PropTypes.string,
}

export default ScrollingBanner
