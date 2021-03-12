import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Button, Container, Grid, Paper } from '@material-ui/core';

import '../../../assets/css/Hi.css';
import '../../../assets/css/form.css';
import DataCompleta from '../../../components/dataCompleta'

import InputText from '../../../components/inputs/inputText'
import InputNumberPhone from '../../../components/inputs/inputNumber'
import SelectStatus from '../../../components/inputs/selectStatus'
import InputBirthDate from '../../../components/inputs/inputBirthDate'
import InputAdress from '../../../components/inputs/inputAdress'


import MenuAdmin from '../../../components/menu-admin';

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
  saveData: {
    display: 'flex',
    position: 'absolute',
    top: '635px',
    left: '604px',
    backgroundColor: '#068D54',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#068d55da',
    }

  },
  back: {
    display: 'flex',
    position: 'absolute',
    top: '635px',
    left: '763px',
    backgroundColor: '#B9B9B9',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#B9B9B9',
    }
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
          <div className="scrollInput">
            <Grid container spacing={3}>
              <div className="register">
                <h1 className="registerTitle">Cadastro de Paciente</h1>
                <DataCompleta />
              </div>

              <div className="formData1">
                <h2 className="titleForm1">Dados Pessoais</h2>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} className="inputForm">
                    <fieldset className="fieldsetName">
                      <legend className="legend">Nome</legend>
                      <InputText />
                    </fieldset>
                  </Grid>
                  <Grid item xs={12} sm={6} className="inputForm">
                    <fieldset className="fieldsetNumber">
                      <legend className="legend">Celular</legend>
                      <InputNumberPhone />
                    </fieldset>
                  </Grid>
                  <Grid item xs={12} sm={6} className="inputForm">
                    <fieldset className="fieldsetOptions">
                      <legend className="legend">Status</legend>
                      <SelectStatus />
                    </fieldset>
                  </Grid>
                  <Grid item xs={12} sm={6} className="inputForm">
                    <fieldset className="fieldsetBirth">
                      <legend className="legend">Data Nascimento</legend>
                      <InputBirthDate />
                    </fieldset>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <div className="formData2">
              <h2 className="titleForm1">Dados Pessoais</h2>
              <InputAdress />
            </div>          
          </div>
          <Button variant="contained" className={classes.saveData}>Salvar Dados</Button>
          <Button variant="contained" className={classes.back}>Voltar</Button>
        </Container>
      </main>
    </div>
  );
}