import React, { ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Form from '@/components/organisms/material-ui/Form'

export default function MaterialUi(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Box pt={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Page
        </Typography>
        <Box my={1}>This is top page.</Box>

        <Form />
      </Box>
    </Container>
  )
}
