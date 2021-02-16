import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../../../assets/css/Hi.css';
import DataCompleta from '../../../components/dataCompleta'

import InputText from '../../../components/inputs/inputText'
import InputNumberPhone from '../../../components/inputs/inputNumber'

import MenuAdmin from '../../../components/menu-admin';

import Footer from '../../../components/footer-admin';

const useStyles = makeStyles((theme) => ({
  registerTitle: {
    color: '#068D54',
    fontSize: '24px',
    fontFamily: 'Open Sans',
    paddingLeft: '42.25px',
  },
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
}));

export default function PacienteCadastrar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <div className="register">
              <h1 className="registerTitle">Cadastro de Paciente</h1>
              <DataCompleta />
            </div>
            <div className="formData">
              <h2 className="titleForm1">Dados Pessoais</h2>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="inputForm">
                  <fieldset className="fieldsetName" label="Name">
                  <legend className="legend">Nome</legend>
                  <InputText />
                  </fieldset>
                </Grid>
                <Grid item xs={12} sm={6} className="inputForm">
                <fieldset className="fieldsetNumber" label="UserNumber">
                  <legend className="legend">Celular</legend>
                    <InputNumberPhone />
                  </fieldset>
                </Grid>
              </Grid>
            </div>
            <Box pt={4} className="footer">
              <Footer className="textFooter"/>
            </Box>
          </Grid>

        </Container>
      </main>
    </div>
  );
}