import * as React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { Media, MediaReveal } from '@noaignite/oui'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { RouterLink } from 'containers'
import { ASPECT_RATIOS } from 'utils/constants'

const PromoCardSlideshowRoot = styled('section', {
  name: 'PromoCardSlideshow',
  slot: 'Root',
})({
  position: 'relative',
})

const PromoCardSlideshowEmbla = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'Embla',
})({
  width: '100%',
  overflow: 'hidden',
})

const PromoCardSlideshowEmblaContainer = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaContainer',
})({
  display: 'flex',
  marginLeft: -1,
})

const PromoCardSlideshowEmblaSlide = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  paddingLeft: 1,
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% / 2)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3)',
  },
}))

const PromoCardSlideshowArticle = styled('article', {
  name: 'PromoCardSlideshow',
  slot: 'Article',
})(({ theme }) => ({
  position: 'relative',
  display: 'block',
  '&::after': {
    ...theme.mixins.absolute(0),
    content: '""',
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  '&:hover::after': {
    opacity: 0.2,
  },
}))

const PromoCardSlideshowArticleContent = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  ...theme.mixins.absolute(0),
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  textAlign: 'center',
  color: theme.palette.common.white,
  span: {
    fontWeight: '600',
    letterSpacing: '1px',
  },
  h2: {
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  },
}))

function PromoCardSlideshow(props) {
  const { items } = props

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <PromoCardSlideshowRoot>
      <PromoCardSlideshowEmbla ref={emblaRef}>
        <PromoCardSlideshowEmblaContainer>
          {items?.map((item, idx) => (
            <PromoCardSlideshowEmblaSlide key={idx}>
              <PromoCardSlideshowArticle as={RouterLink} href={item.url}>
                {item.mediaProps && (
                  <MediaReveal {...ASPECT_RATIOS.article}>
                    <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                  </MediaReveal>
                )}

                <PromoCardSlideshowArticleContent>
                  <Typography component="span" variant="button">
                    {item.subheading}
                  </Typography>

                  <Typography component="h2" variant="h5">
                    {item.heading}
                  </Typography>
                </PromoCardSlideshowArticleContent>
              </PromoCardSlideshowArticle>
            </PromoCardSlideshowEmblaSlide>
          ))}
        </PromoCardSlideshowEmblaContainer>
      </PromoCardSlideshowEmbla>
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
