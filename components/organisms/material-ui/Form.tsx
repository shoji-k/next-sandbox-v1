import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
} from '@mui/material'

function Alert(props: AlertProps): ReactElement {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function Form(): ReactElement {
  const [open, setOpen] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // const { register, errors, handleSubmit } = useForm<FormData>()
  const onSubmit = async (): Promise<void> => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <Box pt={1} bgcolor="white">
      <Typography variant="h5" component="h2" gutterBottom>
        Form
      </Typography>
      <Box pb={2}>Input your information.</Box>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="name"
              name="name"
              variant="outlined"
              fullWidth
              required
              error={!!errors.name}
              helperText={errors.name?.message?.toString()}
              {...register('name', { required: '入力してください' })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="tel"
              name="tel"
              variant="outlined"
              placeholder="09000000000"
              fullWidth
              required
              error={!!errors.tel}
              helperText={errors.tel?.message?.toString()}
              {...register('tel', { required: '入力してください' })}
            />
          </Grid>
          <Grid item>
            <TextField
              type="email"
              label="email"
              name="email"
              variant="outlined"
              fullWidth
              required
              placeholder="sample@sample.com"
              error={!!errors.email}
              helperText={errors.email?.message?.toString()}
              {...register('email', {
                required: '入力してください',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '正しく入力してください',
                },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="memo"
              name="memo"
              variant="outlined"
              fullWidth
              multiline
              error={!!errors.memo}
              helperText={errors.memo?.message?.toString()}
              inputRef={register}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          成功しました
        </Alert>
      </Snackbar>
    </Box>
  )
}
