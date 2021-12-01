import * as React from 'react'
import PropTypes from 'prop-types'
import { Media, MediaReveal } from '@noaignite/oui'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { RouterLink } from 'containers'
import { ASPECT_RATIOS } from 'utils/constants'

const PromoCardSlideshowRoot = styled('section', {
  name: 'PromoCardSlideshow',
  slot: 'Root',
})(({ theme }) => ({
  color: 'white',
  fontWeight: 'bolder',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}))

const PromoCardSlideshowMain = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'Main',
})({
  overflow: 'hidden',
})

const PromoCardSlideshowEmblaContainer = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaContainer',
})({
  display: 'flex',
  width: '100%',
  position: 'relative',
})

const PromoCardSlideshowEmblaSlide = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  display: 'block',
  paddingLeft: theme.spacing(0.2),
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% / 2)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3)',
  },
  // '&::after': {
  //   position: 'absolute',
  //   top: '0',
  //   right: '0',
  //   bottom: '0',
  //   left: '0',
  //   content: "''",
  //   backgroundColor: '#000000',
  //   opacity: '0.1',
  //   transition: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
  // },
  '&:hover': {
    backgroundColor: 'black',
    opacity: 0.6,
    cursor: 'pointer',
  },
}))

const PromoCardSlideshowArticleContent = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
  display: 'flex',
  webkitFlexDirection: 'column',
  msFlexDirection: 'column',
  flexDirection: 'column',
  webkitAlignItems: 'center',
  webkitBoxAlign: 'center',
  msFlexAlign: 'center',
  alignItems: 'center',
  webkitBoxPack: 'center',
  msFlexPack: 'center',
  webkitJustifyContent: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  h2: {
    textTransform: 'uppercase',
  },
  h3: {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2em',
    fontWeight: '400',
    fontSize: '28px',
  },
}))

function PromoCardSlideshow(props) {
  const { items } = props

  return (
    <PromoCardSlideshowRoot>
      <PromoCardSlideshowMain>
        <PromoCardSlideshowEmblaContainer>
          {items?.map((item, idx) => (
            <PromoCardSlideshowEmblaSlide key={idx}>
              <article>
                {item.mediaProps && (
                  <RouterLink href={item.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}

                <PromoCardSlideshowArticleContent>
                  <Typography component="h2" variant="h6">
                    {item.subheading}
                  </Typography>

                  <Typography component="h3" variant="h3">
                    {item.heading}
                  </Typography>
                </PromoCardSlideshowArticleContent>
              </article>
            </PromoCardSlideshowEmblaSlide>
          ))}
        </PromoCardSlideshowEmblaContainer>
      </PromoCardSlideshowMain>
    </PromoCardSlideshowRoot>
  )
}

const itemType = PropTypes.shape({
  mediaProps: PropTypes.object,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  url: PropTypes.string,
})

PromoCardSlideshow.propTypes = {
  items: PropTypes.arrayOf(itemType),
}

export default PromoCardSlideshow
