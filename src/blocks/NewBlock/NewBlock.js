import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const NewBlockRoot = styled('section', {
  name: 'NewBlock',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
  backgroundColor: 'orange',
  textAlign: 'center',
  padding: 'var(--cia-section-spacing)',
})

const NewBlockMain = styled('div', {
  name: 'NewBlock',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

function NewBlock(props) {
  const { heading } = props

  return (
    <NewBlockRoot>
      <NewBlockMain>
        <section>
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </section>
      </NewBlockMain>
    </NewBlockRoot>
  )
}

NewBlock.propTypes = {
  heading: PropTypes.string,
}

export default NewBlock
