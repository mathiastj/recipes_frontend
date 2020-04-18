/* eslint-disable camelcase */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stars from '../stars'

const useStyles = makeStyles({
  'text-left': {
    float: 'left',
    'text-align': 'left',
    width: '33%',
  },
  'text-center': {
    float: 'left',
    'text-align': 'center',
    width: '34%',
  },
  'text-right': {
    float: 'left',
    'text-align': 'right',
    width: '33%',
  },
  root: {
    paddingBlock: '3rem',
  },
})

const RecipeShowHeader = (props) => {
  const classes = useStyles()
  const { record } = props
  const { rating, servings, duration_free } = record
  return (
    <div className={classes.root}>
      <span className={classes['text-left']}>
        <Stars rating={rating} />
      </span>
      <span className={classes['text-center']}>{servings} servings</span>
      <span className={classes['text-right']}>{duration_free}</span>
    </div>
  )
}

export default RecipeShowHeader
