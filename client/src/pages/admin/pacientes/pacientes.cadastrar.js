import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import {MuiThemeProvider , createMuiTheme} from '@material-ui/core';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../../../assets/css/Hi.css';
import DataCompleta from '../../../components/dataCompleta'

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
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function PacienteCadastrar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <MenuAdmin />
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <div className="register">
              <h1 className="registerTitle">Cadastro de Paciente</h1>
              <DataCompleta />
            </div>
            
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}