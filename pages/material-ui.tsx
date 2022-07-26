import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Form from '@/components/organisms/material-ui/Form'
import Calendar from '@/components/organisms/material-ui/Calendar'

export default function MaterialUi(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Box pt={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Page
        </Typography>
        <Box my={1}>This is top page.</Box>

        <Form />
        <Calendar />
      </Box>
    </Container>
  )
}
