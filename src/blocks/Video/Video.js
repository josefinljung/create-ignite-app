import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { RouterLink } from 'containers'

const VideoRoot = styled('section', {
  name: 'Video',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  paddingBottom: '60px',
  minHeight: 550,
  color: theme.palette.getContrastText(theme.palette.text.primary),
  textAlign: 'left',
  textTransform: 'uppercase',
  [theme.breakpoints.up('md')]: {
    minHeight: 760,
  },
}))

const VideoMediaReveal = styled(MediaReveal, {
  name: 'Video',
  slot: 'MediaReveal',
})(({ theme }) => ({
  ...theme.mixins.absolute(0),
  zIndex: -1,
  '& *': {
    height: '100%',
  },
}))

const VideoMain = styled('div', {
  name: 'Video',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('sm'),
  maxWidth: '760px',
  padding: 'var(--cia-section-spacing) var(--cia-container-spacing)',
  marginLeft: '0px',
  position: 'absolute',
  flexDirection: 'column',
  bottom: '0',
  left: '0',
  display: 'flex',
  alignItems: 'flex-end',
  h5: {
    letterSpacing: '2px',
  },
  h1: {
    fontWeight: '800',
  },
  a: {
    fontWeight: '800',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const VideoButtonContainer = styled('div', {
  name: 'Video',
  slot: 'Container',
})({
  display: 'flex',
  marginRight: 'auto',
})

const VideoButton = styled(Button, {
  name: 'Video',
  slot: 'Button',
})(({ theme }) => ({
  // Makes entire Video block clickable.
  // textDecoration: 'underline',
  borderBottom: '2px solid white',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '0px',
  marginRight: '10px',
  display: 'flex',
  alignItems: 'flex-start',
  textAlign: 'left',
  '&:before': {
    ...theme.mixins.absolute(0),
    content: '""',
  },
}))

function Video(props) {
  const {
    backgroundMediaProps,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    heading,
    subheading,
    renderIndex,
  } = props

  return (
    <VideoRoot>
      {backgroundMediaProps && (
        <VideoMediaReveal>
          <Media
            {...(backgroundMediaProps?.component === 'video'
              ? { autoPlay: true, muted: true, loop: true, playsInline: true }
              : {})}
            {...backgroundMediaProps}
            priority={renderIndex === 0}
          />
        </VideoMediaReveal>
      )}

      <VideoMain>
        <Typography component="h5" variant="h6">
          {subheading}
        </Typography>
        <Typography component="h1" variant="h2">
          {heading}
        </Typography>

        <VideoButtonContainer>
          {primaryCtaLabel && primaryCtaUrl && (
            <VideoButton component={RouterLink} href={primaryCtaUrl} color="inherit" variant="text">
              {primaryCtaLabel}
            </VideoButton>
          )}
          {secondaryCtaLabel && secondaryCtaUrl && (
            <VideoButton
              component={RouterLink}
              href={secondaryCtaUrl}
              color="inherit"
              variant="text"
            >
              {secondaryCtaLabel}
            </VideoButton>
          )}
        </VideoButtonContainer>
      </VideoMain>
    </VideoRoot>
  )
}

Video.propTypes = {
  backgroundMediaProps: PropTypes.object,
  primaryCtaLabel: PropTypes.string,
  primaryCtaUrl: PropTypes.string,
  secondaryCtaLabel: PropTypes.string,
  secondaryCtaUrl: PropTypes.string,
  excerpt: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  renderIndex: PropTypes.number.isRequired,
}

export default Video
