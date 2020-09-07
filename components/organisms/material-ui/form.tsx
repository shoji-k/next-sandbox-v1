import React, { ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export default function MaterialUi(): ReactElement {
  return (
    <Box pt={1} bgcolor="white">
      <Typography variant="h5" component="h2" gutterBottom>
        Form
      </Typography>
      <Box pb={2}>Input your information.</Box>
      <form>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField label="name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item>
            <TextField label="tel" variant="outlined" fullWidth required />
          </Grid>
          <Grid item>
            <TextField label="email" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="memo" variant="outlined" fullWidth multiline />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
