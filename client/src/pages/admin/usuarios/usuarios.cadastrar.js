import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import '../../../assets/css/form.css'
import Logo from '../../../assets/img/logo-hi.png'

import InputText2 from '../../../components/inputs/inputText2'
import InputEmail from '../../../components/inputs/inputEmail'
import InputPassword from '../../../components/inputs/inputPassword'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: '#068D54',
    color: '#FFFFFF',
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      backgroundColor: '#068d55da',
    },
    '@media (hover: none)': {
      backgroundColor: '#068d55da',
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img src={Logo} className="logoHi"/>
      <div id="registerUser" className={classes.paper}>

        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <fieldset className="fieldsetUserName">
              <InputText2 />
              </fieldset>
            </Grid>
            <fieldset className="fieldseUserEmail">
              <InputEmail />
            </fieldset>
            <Typography component="p" className="strongPassword" variant="p">
              <br/>
              Crie uma senha forte com mais de 8 caracteres
            </Typography>
            <Grid item xs={12}>
            <InputPassword />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="" color="primary" />}
                label="Li e concordo com os termos de uso."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"

            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Já tem cadastro? Faça o LogIn
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    
  );
}