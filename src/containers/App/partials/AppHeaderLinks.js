import * as React from 'react'
import { styled } from '@mui/system'

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
})

const AppHeaderLinkListItem = styled('li', {
  name: 'AppHeaderLinks',
  slot: 'LinkItem',
})({
  display: 'inlineBlock',
  marginRight: '10px',
  color: 'black',
})

const AppHeaderLinks = React.memo(function AppHeaderLinks(props) {
  return (
    <>
      <AppHeaderLinksRoot {...props}>
        <AppHeaderLinksList>
          {/* Loop through list of links here  */}
          <AppHeaderLinkListItem>
            <span>länkar</span>
          </AppHeaderLinkListItem>
          <AppHeaderLinkListItem>
            <span>länkar</span>
          </AppHeaderLinkListItem>
        </AppHeaderLinksList>
      </AppHeaderLinksRoot>
    </>
  )
})

export default AppHeaderLinks
