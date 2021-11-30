import * as React from 'react'
import PropTypes from 'prop-types'
// import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const PromoCardSlideshowRoot = styled('section', {
  name: 'PromoCardSlideshow',
  slot: 'Root',
})({
  color: 'red',
})

function PromoCardSlideshow(props) {
  const { heading } = props

  return (
    <PromoCardSlideshowRoot>
      <Typography>{heading}</Typography>
    </PromoCardSlideshowRoot>
  )
}

PromoCardSlideshow.propTypes = {
  heading: PropTypes.string,
}

export default PromoCardSlideshow
