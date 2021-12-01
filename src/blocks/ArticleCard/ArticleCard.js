import * as React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
// import { useI18n } from 'api'
import { ASPECT_RATIOS } from 'utils/constants'
import { RouterLink } from 'containers'

const ArticleCardRoot = styled('section', {
  name: 'ArticleCard',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
  paddingLeft: '6vw',
})

const ArticleCardHeader = styled('div', {
  name: 'ArticleCard',
  slot: 'Header',
})({
  marginBottom: '24px',
  overflow: 'hidden',
})

const ArticleCardMain = styled('div', {
  name: 'ArticleCard',
  slot: 'Main',
})({
  overflow: 'hidden',
})

const ArticleCardEmblaContainer = styled('div', {
  name: 'ArticleCard',
  slot: 'EmblaContainer',
})(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(0),
}))

const ArticleCardEmblaSlide = styled('div', {
  name: 'ArticleCard',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  paddingLeft: theme.spacing(0.12),
  width: 'calc(100% / 2)',
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3)',
  },
  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% / 5)',
  },
}))

const ArticleCardArticleContent = styled('div', {
  name: 'ArticleCard',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
  textTransform: 'uppercase',
  marginTop: '16px',
}))

function ArticleCard(props) {
  const { heading, items } = props

  // const { t } = useI18n()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <ArticleCardRoot>
      {heading && (
        <ArticleCardHeader>
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </ArticleCardHeader>
      )}

      <ArticleCardMain>
        <div ref={emblaRef}>
          <ArticleCardEmblaContainer>
            {items?.map((item, idx) => (
              <ArticleCardEmblaSlide key={idx}>
                <article>
                  {item.mediaProps && (
                    <RouterLink href={item.url}>
                      <MediaReveal {...ASPECT_RATIOS.article}>
                        <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                      </MediaReveal>
                    </RouterLink>
                  )}
                  <ArticleCardArticleContent>
                    <Typography component="h2" variant="h6" paragraph>
                      {item.text}
                    </Typography>
                  </ArticleCardArticleContent>
                </article>
              </ArticleCardEmblaSlide>
            ))}
          </ArticleCardEmblaContainer>
        </div>
      </ArticleCardMain>
    </ArticleCardRoot>
  )
}

const itemType = PropTypes.shape({
  mediaProps: PropTypes.object,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
})

ArticleCard.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.arrayOf(itemType),
}

export default ArticleCard
