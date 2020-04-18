import React from 'react'
import { RichTextField } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  label: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    display: 'block',
    marginBottom: '0.75rem',
  },
  root: {
    paddingBlock: '1rem',
  },
})

const getLabel = (source) => (source === 'ingredients' ? 'Ingredients' : 'Directions')

const RecipeShowRichText = (props) => {
  const classes = useStyles()
  const { source } = props
  return (
    <div className={classes.root}>
      <span className={classes.label}>{getLabel(source)}</span>
      <RichTextField source {...props} />
    </div>
  )
}

export default RecipeShowRichText
