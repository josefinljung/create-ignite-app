import * as React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
// import { useI18n } from 'api'
import { ASPECT_RATIOS } from 'utils/constants'
import { RouterLink } from 'containers'

const NewBlockRoot = styled('section', {
  name: 'NewBlock',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
})

const NewBlockMain = styled('div', {
  name: 'NewBlock',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

const NewBlockEmblaContainer = styled('div', {
  name: 'NewBlock',
  slot: 'EmblaContainer',
})(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(-2),
}))

const NewBlockEmblaSlide = styled('div', {
  name: 'NewBlock',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% / 2)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3)',
  },
}))

const NewBlockArticleContent = styled('div', {
  name: 'NewBlock',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
}))

function NewBlock(props) {
  const { item1, item2, item3 } = props

  // const { t } = useI18n()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <NewBlockRoot>
      <NewBlockMain>
        <div ref={emblaRef}>
          <NewBlockEmblaContainer>
            <NewBlockEmblaSlide>
              <article>
                {item1.mediaProps && (
                  <RouterLink href={item1.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item1.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <NewBlockArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item1.heading}
                  </Typography>
                  {item1.subheading && (
                    <Typography variant="overline">{item1.subheading}</Typography>
                  )}
                </NewBlockArticleContent>
              </article>
            </NewBlockEmblaSlide>

            <NewBlockEmblaSlide>
              <article>
                {item2.mediaProps && (
                  <RouterLink href={item2.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item2.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <NewBlockArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item2.heading}
                  </Typography>
                  {item2.subheading && (
                    <Typography variant="overline">{item2.subheading}</Typography>
                  )}
                </NewBlockArticleContent>
              </article>
            </NewBlockEmblaSlide>

            <NewBlockEmblaSlide>
              <article>
                {item3.mediaProps && (
                  <RouterLink href={item3.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item3.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <NewBlockArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item3.heading}
                  </Typography>
                  {item3.subheading && (
                    <Typography variant="overline">{item3.subheading}</Typography>
                  )}
                </NewBlockArticleContent>
              </article>
            </NewBlockEmblaSlide>
          </NewBlockEmblaContainer>
        </div>
      </NewBlockMain>
    </NewBlockRoot>
  )
}

const itemType = PropTypes.shape({
  mediaProps: PropTypes.object,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  url: PropTypes.string,
})

NewBlock.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  url: PropTypes.string,
  item1: PropTypes.arrayOf(itemType),
  item2: PropTypes.arrayOf(itemType),
  item3: PropTypes.arrayOf(itemType),
}

export default NewBlock
