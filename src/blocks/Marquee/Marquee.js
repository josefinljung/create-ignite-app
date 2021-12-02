import * as React from 'react'
import PropTypes from 'prop-types'
import ReactFastMarquee from 'react-fast-marquee'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const MarqueeRoot = styled('section', {
  name: 'Marquee',
  slot: 'Root',
})({
  position: 'relative',
  fontSize: '12px',
  backgroundColor: 'black',
  // textAlign: 'center',
  // textTransform: 'uppercase',
})

const MarqueeMain = styled('div', {
  name: 'Marquee',
  slot: 'Main',
})({
  padding: '16px 0px',
  overflow: 'hidden',
  color: 'white',
  fontWeight: '600',
  lineHeight: '1.5',
  letterSpacing: '0.1125em',
  textTransform: 'uppercase',
})

function Marquee(props) {
  const { heading, repeatHeading = 10, speed = 20 } = props

  return (
    <MarqueeRoot>
      <MarqueeMain>
        <Typography variant="span">
          <ReactFastMarquee gradient={false} speed={speed}>
            {Array.from(new Array(repeatHeading), () => heading)}
          </ReactFastMarquee>
        </Typography>
      </MarqueeMain>
    </MarqueeRoot>
  )
}

Marquee.propTypes = {
  heading: PropTypes.string,
  repeatHeading: PropTypes.number,
  speed: PropTypes.string,
}

export default Marquee
