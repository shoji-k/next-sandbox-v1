import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import {
  Clear,
  ChangeHistory,
  RadioButtonUnchecked,
} from '@material-ui/icons'

const useStyles = makeStyles({
  cell: {
    width: '14.285%',
    textAlign: 'center',
  },
  time: {
    width: '100px',
    textAlign: 'center',
  },
})

function HeaderTimeCell({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  const classes = useStyles()
  return (
    <Box className={classes.time} p={2} bgcolor="grey.300" border={1}>
      {children}
    </Box>
  )
}

function HeaderCell({ children }: { children: React.ReactNode }): ReactElement {
  const classes = useStyles()
  return (
    <Box className={classes.cell} p={2} bgcolor="grey.300" border={1}>
      {children}
    </Box>
  )
}

function TimeCell({ children }: { children: React.ReactNode }): ReactElement {
  const classes = useStyles()
  return (
    <Box className={classes.time} p={2} bgcolor="grey.100" border={1}>
      {children}
    </Box>
  )
}

function Cell({ staffs }: { staffs?: string[] }): ReactElement {
  const classes = useStyles()

  const click = (): void => {
    alert('select')
  }

  return (
    <Box
      className={classes.cell}
      p={2}
      m="auto"
      bgcolor="grey.100"
      border={1}
      onClick={click}
    >
      {staffs.length >= 2 && <RadioButtonUnchecked onClick={click} />}
      {staffs.length == 1 && <ChangeHistory onClick={click} />}
      {staffs.length == 0 && <Clear />}
    </Box>
  )
}

export default function Calendar(): ReactElement {
  const times = [
    {
      time: '10:00',
      staffs: [
        ['sato', 'tanaka'],
        [],
        ['sato'],
        ['sato', 'tanaka'],
        [],
        ['sato'],
        ['sato', 'tanaka'],
      ],
    },
    {
      time: '11:00',
      staffs: [
        [],
        ['sato'],
        ['sato', 'tanaka'],
        [],
        ['sato'],
        ['sato', 'tanaka'],
        ['sato', 'tanaka'],
      ],
    },
  ]

  return (
    <Box pt={1} bgcolor="white">
      <Typography variant="h5" component="h2" gutterBottom>
        Calendar
      </Typography>

      <Box display="flex" flexWrap="nowrap">
        <Box>前</Box>
        <Box>次</Box>
      </Box>
      <Box display="flex" flexWrap="nowrap">
        <HeaderCell>20</HeaderCell>
        <HeaderCell>21</HeaderCell>
        <HeaderCell>22</HeaderCell>
        <HeaderCell>23</HeaderCell>
        <HeaderCell>24</HeaderCell>
        <HeaderCell>25</HeaderCell>
        <HeaderCell>26</HeaderCell>
        <HeaderTimeCell></HeaderTimeCell>
      </Box>
      {times.map((one) => {
        return (
          <Box display="flex" flexWrap="nowrap" key={one.time}>
            {one.staffs.map((s, i) => {
              return <Cell key={i} staffs={s} />
            })}
            <TimeCell>{one.time}</TimeCell>
          </Box>
        )
      })}
    </Box>
  )
}
