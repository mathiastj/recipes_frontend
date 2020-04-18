import React from 'react'
import { RichTextField, useTranslate } from 'react-admin'
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

const RecipeShowRichText = (props) => {
  const translate = useTranslate()
  const getLabel = (source) =>
    source === 'ingredients'
      ? translate('resources.recipes.fields.ingredients')
      : translate('resources.recipes.fields.directions')
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
