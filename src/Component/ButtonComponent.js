import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: '20px',
      paddingRight: '50px',
      paddingLeft: '50px'

    },
  },
}));

export default function ContainedButtons( props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color={props.color} onClick = {props.onClick} >
        {props.name}
      </Button>
    </div>
  );
}
