import * as React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
// import { useI18n } from 'api'
import { ASPECT_RATIOS } from 'utils/constants'
import { RouterLink } from 'containers'

const PromoCardRoot = styled('section', {
  name: 'PromoCard',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
})

const PromoCardHeader = styled('div', {
  name: 'PromoCard',
  slot: 'Header',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  marginBottom: '24px',
  overflow: 'hidden',
})

const PromoCardMain = styled('div', {
  name: 'PromoCard',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

const PromoCardEmblaContainer = styled('div', {
  name: 'PromoCard',
  slot: 'EmblaContainer',
})(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(-2),
}))

const PromoCardEmblaSlide = styled('div', {
  name: 'PromoCard',
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

const PromoCardArticleContent = styled('div', {
  name: 'PromoCard',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
}))

function PromoCard(props) {
  const { heading, item1, item2, item3, item4, item5, item6, item7 } = props

  // const { t } = useI18n()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <PromoCardRoot>
      {heading && (
        <PromoCardHeader>
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </PromoCardHeader>
      )}
      <PromoCardMain>
        <div ref={emblaRef}>
          <PromoCardEmblaContainer>
            <PromoCardEmblaSlide>
              <article>
                {item1.mediaProps && (
                  <RouterLink href={item1.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item1.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item1.heading}
                  </Typography>
                  {item1.subheading && (
                    <Typography variant="overline">{item1.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item2.mediaProps && (
                  <RouterLink href={item2.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item2.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item2.heading}
                  </Typography>
                  {item2.subheading && (
                    <Typography variant="overline">{item2.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item3.mediaProps && (
                  <RouterLink href={item3.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item3.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item3.heading}
                  </Typography>
                  {item3.subheading && (
                    <Typography variant="overline">{item3.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item4.mediaProps && (
                  <RouterLink href={item4.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item4.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item4.heading}
                  </Typography>
                  {item4.subheading && (
                    <Typography variant="overline">{item4.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item5.mediaProps && (
                  <RouterLink href={item5.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item5.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item5.heading}
                  </Typography>
                  {item5.subheading && (
                    <Typography variant="overline">{item5.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item6.mediaProps && (
                  <RouterLink href={item6.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item6.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item6.heading}
                  </Typography>
                  {item6.subheading && (
                    <Typography variant="overline">{item6.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>

            <PromoCardEmblaSlide>
              <article>
                {item7.mediaProps && (
                  <RouterLink href={item7.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item7.mediaProps} />
                    </MediaReveal>
                  </RouterLink>
                )}
                <PromoCardArticleContent>
                  <Typography component="h2" variant="h4" paragraph>
                    {item7.heading}
                  </Typography>
                  {item7.subheading && (
                    <Typography variant="overline">{item7.subheading}</Typography>
                  )}
                </PromoCardArticleContent>
              </article>
            </PromoCardEmblaSlide>
          </PromoCardEmblaContainer>
        </div>
      </PromoCardMain>
    </PromoCardRoot>
  )
}

const itemType = PropTypes.shape({
  mediaProps: PropTypes.object,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  url: PropTypes.string,
})

PromoCard.propTypes = {
  heading: PropTypes.string,
  url: PropTypes.string,
  item1: PropTypes.arrayOf(itemType),
  item2: PropTypes.arrayOf(itemType),
  item3: PropTypes.arrayOf(itemType),
  item4: PropTypes.arrayOf(itemType),
  item5: PropTypes.arrayOf(itemType),
  item6: PropTypes.arrayOf(itemType),
  item7: PropTypes.arrayOf(itemType),
}

export default PromoCard
