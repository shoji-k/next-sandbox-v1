import React, { ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export default function MaterialUi(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI Page
      </Typography>
      <Box my={4}>hey</Box>
    </Container>
  )
}
