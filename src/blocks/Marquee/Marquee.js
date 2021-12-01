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
  color: 'white',
  textAlign: 'center',
  padding: '10px 0px',
  textTransform: 'uppercase',
  fontWeight: '800',
})

const MarqueeMain = styled('div', {
  name: 'Marquee',
  slot: 'Main',
})({
  paddingLeft: '0px',
  paddingRight: '0px',
  overflow: 'hidden',
  lineHeight: '1',
  letterSpacing: '4px',
  fontWeight: '800',
})

function Marquee(props) {
  const { heading, repeatHeading = 10, speed = 20 } = props

  return (
    <MarqueeRoot>
      <MarqueeMain>
        <Typography variant="h6">
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
