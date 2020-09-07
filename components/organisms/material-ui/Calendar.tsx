import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  time: {
    width: '100px',
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
  return (
    <Box p={2} bgcolor="grey.300" flexGrow={1} flexShrink={1} border={1}>
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

function Cell({
  children,
  staffs,
}: {
  children: React.ReactNode
  staffs?: string[]
}): ReactElement {
  return (
    <Box p={2} bgcolor="grey.100" flexGrow={1} flexShrink={1} border={1}>
      {children}
      {staffs && (staffs.length > 0 ? '○' : '☓')}
    </Box>
  )
}

export default function Calendar(): ReactElement {
  const times = [
    { time: '10:00', staffs: ['sato', 'tanaka'] },
    { time: '11:00', staffs: [] },
    { time: '12:00', staffs: ['sato'] },
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
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <Cell staffs={one.staffs}></Cell>
            <TimeCell>{one.time}</TimeCell>
          </Box>
        )
      })}
    </Box>
  )
}
