import * as React from 'react'
import { styled } from '@mui/system'
import { Collapse, Link } from '@mui/material'
import { useI18n, useSettings } from 'api'

const AppHeaderLinksRoot = styled('nav', {
  name: 'AppHeaderLinks',
  slot: 'Root',
})({})

const AppHeaderLinksList = styled('ul', {
  name: 'AppHeaderLinks',
  slot: 'List',
})({
  display: 'flex',
  paddingInlineStart: 0,
  marginLeft: '-8px',
})

const AppHeaderLinksListItem = styled('li', {
  name: 'AppHeaderLinks',
  slot: 'Item',
})({
  display: 'inlineBlock',
  color: 'black',
})

const AppHeaderLinksListItemLink = styled(Link, {
  name: 'AppHeaderLinks',
  slot: 'Link',
})({
  padding: '0px 8px',
})

const AppHeaderLinks = React.memo(function AppHeaderLinks(props) {
  const { t } = useI18n()
  const { menus } = useSettings()

  const [expanded, setExpanded] = React.useState(false)
  const handleClick = setExpanded

  return (
    <>
      <AppHeaderLinksRoot {...props} aria-label={t(__translationGroup)`Main navigation`}>
        <nav aria-label={t(__translationGroup)`Main navigation`}>
          {menus?.secondary?.length > 0 && (
            <AppHeaderLinksList>
              {menus.secondary.map((menuLink, idx) => (
                <AppHeaderLinksListItem onClick={handleClick} key={idx}>
                  <AppHeaderLinksListItemLink>{menuLink.label}</AppHeaderLinksListItemLink>
                </AppHeaderLinksListItem>
              ))}
              <Collapse in={expanded} component="span" unmountOnExit>
                It expanded!
              </Collapse>
            </AppHeaderLinksList>
          )}
        </nav>
      </AppHeaderLinksRoot>
    </>
  )
})

export default AppHeaderLinks
