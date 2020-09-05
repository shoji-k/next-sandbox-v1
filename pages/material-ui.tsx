import React, { ReactElement } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export default function MaterialUi(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Box my={4}>hey</Box>
    </Container>
  )
}
