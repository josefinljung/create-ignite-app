import * as React from 'react'
import PropTypes from 'prop-types'
// import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { ASPECT_RATIOS } from 'utils/constants'
import { RouterLink } from 'containers'

const PromoCardSlideshowRoot = styled('section', {
  name: 'PromoCardSlideshow',
  slot: 'Root',
})({
  color: 'red',
})

const PromoCardSlideshowMain = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

const PromoCardSlideshowArticleContent = styled('div', {
  name: 'PromoCardSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
}))

function PromoCardSlideshow(props) {
  const { items } = props

  return (
    <PromoCardSlideshowRoot>
      <PromoCardSlideshowMain>
        {items?.map((item, idx) => (
          <article key={idx}>
            {item.mediaProps && (
              <RouterLink href={item.url}>
                <MediaReveal {...ASPECT_RATIOS.article}>
                  <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                </MediaReveal>
              </RouterLink>
            )}

            <PromoCardSlideshowArticleContent>
              <Typography component="h2" variant="h5">
                {item.subheading}
              </Typography>

              <Typography component="h2" variant="h5">
                {item.heading}
              </Typography>
            </PromoCardSlideshowArticleContent>
          </article>
        ))}
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
