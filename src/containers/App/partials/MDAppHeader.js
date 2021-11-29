// @inheritedComponent AppBar

import * as React from 'react'
import PropTypes from 'prop-types'
import { generateUtilityClasses } from '@mui/core'
import { styled } from '@mui/system'
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material'
import { useCheckoutSelection, useI18n } from 'api'
import { useDimensions } from 'utils'
import {
  Brand as BrandIcon,
  // BrandIcon as NewBrandIcon,
  Cart as CartIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from 'components/icons'
import RouterLink from '../../RouterLink'
import { useApp } from '../AppContext'

const BREAKPOINT_KEY = 'md'

export const classes = generateUtilityClasses('CiaMDAppHeader', [
  'toolbarPushMobile',
  'toolbarPushDesktop',
  'hiddenOnMobile',
  'hiddenOnDesktop',
])

const MDAppHeaderRoot = styled(AppBar, {
  name: 'MDAppHeader',
  slot: 'Root',
})(({ theme }) => ({
  // ...(ownerState.appBarColor === 'transparent' && {
  //   '&:not(:hover):not(:focus-within)': {
  //     backgroundColor: 'transparent',
  //     color: 'inherit',
  //   },
  // }),
  // ...(ownerState.disableTransparency !== undefined && {
  //   transition: theme.transitions.create(['background-color'], {
  //     duration: theme.transitions.duration.shortest, // Match value of `IconButton`
  //   }),
  // }),
  // Util classes
  [`& .${classes.toolbarPushMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.toolbarPushDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.hiddenOnMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { display: 'none' },
  },
  [`& .${classes.hiddenOnDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { display: 'none' },
  },
}))

const MDAppHeaderTop = styled('div', {
  name: 'MDAppHeader',
  slot: 'BrandLink',
})({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  borderBottom: '1px solid black',
  fontSize: '12px',
  letterSpacing: '1px',
  marginLeft: 'var(--cia-toolbar-spacing)',
  marginRight: 'var(--cia-toolbar-spacing)',
})

const MDAppHeaderTopContentStart = styled('span', {
  name: 'MDAppHeader',
  slot: 'BrandLink',
})({
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  margin: '8px 0px 8px 0px',
})

const MDAppHeaderTopContentEnd = styled('span', {
  name: 'MDAppHeader',
  slot: 'BrandLink',
})({
  position: 'relative',
  borderLeft: '1px solid black',
  textAlign: 'center',
  width: '100%',
  margin: '8px 0px 8px 0px',
})

const MDAppHeaderBrandLink = styled(RouterLink, {
  name: 'MDAppHeader',
  slot: 'BrandLink',
})({
  position: 'absolute',
  left: '50%',
  padding: '10px',
  transform: 'translateX(-50%)',
  color: 'inherit',
  '& > svg': {
    display: 'block',
    width: 'auto',
  },
})

const MDAppHeader = React.memo(function MDAppHeader(props) {
  const {
    headerMode = 'opaque',
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    onCartMenuToggle,
    onNavMenuToggle,
    onSearchMenuToggle,
    productsCount,
    ...other
  } = props

  const { t } = useI18n()
  const [rootRef, dimensions] = useDimensions()

  // const [disableTransparency, setDisableTransparency] = React.useState(undefined)
  // const syncDisableTransparency = React.useCallback(() => {
  //   setDisableTransparency(window.pageYOffset > 100)
  // }, [])

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     syncDisableTransparency()
  //   }

  //   if (headerMode === 'auto') {
  //     window.addEventListener('scroll', handleScroll, { passive: true })
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll)
  //     }
  //   }

  //   // Define `disableTransparency` value on `headerMode` prop change, thereby
  //   // enabling transitions. Doing so negates flashing of header on page load
  //   // for pages that don't use `headerMode="opaque"`.
  //   return syncDisableTransparency
  // }, [headerMode, syncDisableTransparency])

  // let appBarColor = 'default'
  // if (
  //   (headerMode === 'transparent' || (headerMode === 'auto' && !disableTransparency)) &&
  //   !isSomeMenuOpen
  // ) {
  //   appBarColor = 'transparent'
  // }

  return (
    <MDAppHeaderRoot
      // ownerState={{ appBarColor, disableTransparency }}
      position={headerMode === 'opaque' ? 'sticky' : 'fixed'}
      ref={rootRef}
      {...other}
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --cia-header-height: ${dimensions.height}px;
            --cia-initial-sticky-top: ${headerMode === 'opaque' ? dimensions.height : 0}px;
            --cia-sticky-top: ${headerMode !== 'transparent' ? dimensions.height : 0}px;
          }
        `,
        }}
      />

      <MDAppHeaderTop>
        <MDAppHeaderTopContentStart>Black Week -Up to 30% off</MDAppHeaderTopContentStart>
        <MDAppHeaderTopContentEnd>3-6 dagars leverans</MDAppHeaderTopContentEnd>
      </MDAppHeaderTop>
      <Toolbar>
        <IconButton
          onClick={onNavMenuToggle}
          edge="start"
          size="small"
          aria-haspopup="true"
          aria-expanded={isNavMenuOpen}
          aria-label={t(__translationGroup)`Toggle main menu`}
        >
          {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <div className={classes.toolbarPushMobile} />
        <div className={classes.toolbarPushDesktop} />

        <MDAppHeaderBrandLink href="/" aria-label={t(__translationGroup)`Go to the homepage`}>
          <BrandIcon style={{ height: '60px' }} />
        </MDAppHeaderBrandLink>

        <IconButton
          onClick={onSearchMenuToggle}
          size="small"
          aria-haspopup="true"
          aria-expanded={isSearchMenuOpen}
          aria-label={t(__translationGroup)`Toggle search`}
        >
          {isSearchMenuOpen ? <CloseIcon /> : <SearchIcon />}
        </IconButton>

        <IconButton
          onClick={onCartMenuToggle}
          edge="end"
          size="small"
          aria-haspopup="true"
          aria-expanded={isCartMenuOpen}
          aria-label={t(__translationGroup)`Toggle cart menu`}
        >
          {isCartMenuOpen ? (
            <CloseIcon />
          ) : (
            <Badge badgeContent={productsCount} color="primary" overlap="circular">
              <CartIcon />
            </Badge>
          )}
        </IconButton>
      </Toolbar>
    </MDAppHeaderRoot>
  )
})

MDAppHeader.propTypes = {
  headerMode: PropTypes.oneOf(['opaque', 'transparent', 'auto']),
  isCartMenuOpen: PropTypes.bool,
  isNavMenuOpen: PropTypes.bool,
  isSearchMenuOpen: PropTypes.bool,
  isSomeMenuOpen: PropTypes.bool,
  onCartMenuToggle: PropTypes.func,
  onNavMenuToggle: PropTypes.func,
  onSearchMenuToggle: PropTypes.func,
  productsCount: PropTypes.number,
}

function MDAppHeaderContainer(props) {
  const {
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    onCartMenuToggle,
    onNavMenuToggle,
    onSearchMenuToggle,
  } = useApp()
  const { items } = useCheckoutSelection()

  return (
    <MDAppHeader
      isCartMenuOpen={isCartMenuOpen}
      isNavMenuOpen={isNavMenuOpen}
      isSearchMenuOpen={isSearchMenuOpen}
      isSomeMenuOpen={isSomeMenuOpen}
      onCartMenuToggle={onCartMenuToggle}
      onNavMenuToggle={onNavMenuToggle}
      onSearchMenuToggle={onSearchMenuToggle}
      productsCount={items.length}
      {...props}
    />
  )
}

export default MDAppHeaderContainer
