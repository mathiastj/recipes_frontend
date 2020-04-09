import React from 'react';
import { TextField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
      fontWeight: 'bold',
      alignContent: 'center'
    },
    root: {
      "text-align": 'center',
    }
});

const RecipeShowTitle = props => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <span className={classes.text}>{props.record.title}</span>
      </div>
    )
    // <TextField className={classes.text} {...props}/>
}

export default RecipeShowTitle;