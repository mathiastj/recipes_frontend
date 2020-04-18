import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  text: {
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: '2rem',
  },
  root: {
    'text-align': 'center',
  },
})

const RecipeShowTitle = (props) => {
  const classes = useStyles()
  const { record } = props
  return (
    <div className={classes.root}>
      <span className={classes.text}>{record.title}</span>
    </div>
  )
}

export default RecipeShowTitle
