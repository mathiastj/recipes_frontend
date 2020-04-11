import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <span className={classes["text-left"]}>{props.record.rating} stars</span>
        <span className={classes["text-center"]}>{props.record.servings} servings</span>
        <span className={classes["text-right"]}>{props.record.duration} minutes</span>
      </div>
    )
}

export default RecipeShowHeader;