import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonComponent from  '../Component/ButtonComponent';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Landing(props) {
  const classes = useStyles();

  const handleSignUpClick = ()=>{
      props.history.push('/signUp');
  }

  const handleSignInClick = ()=>{
    props.history.push('/signIn');
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} style = {{fontSize:'50px'}}>
        <div>
          Proof of Concept
        </div>
          <Grid container style = {{position:'relative',top:'40px'}}>
            <Grid item>
            <ButtonComponent name = {'SignIn'} color = {'primary'} onClick = {handleSignInClick} />
            </Grid>
            <Grid item>
            <ButtonComponent name = {'SignUp'} color = {'secondary'} onClick = {handleSignUpClick}/>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}