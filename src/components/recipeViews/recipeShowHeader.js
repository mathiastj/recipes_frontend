import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stars from '../stars'

const useStyles = makeStyles({
    "text-left": {
      float: 'left',
      'text-align': 'left',
      width: '33%'

    },
    "text-center": {
      float: 'left',
      'text-align': 'center',
      width: '34%'
    },
    "text-right": {
      float: 'left',
      'text-align': 'right',
      width: '33%'
    },
    root: {
      paddingBlock: '2rem'
    }
});

const RecipeShowHeader = props => {
  console.log('header')
  console.log(props)
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <span className={classes["text-left"]}>
          <Stars rating={props.record.rating}/>
        </span>
        <span className={classes["text-center"]}>{props.record.servings} servings</span>
        <span className={classes["text-right"]}>{props.record.duration} minutes</span>
      </div>
    )
}

export default RecipeShowHeader;