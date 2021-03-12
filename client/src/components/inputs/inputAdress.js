import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@material-ui/core'
import { Snackbar } from '@material-ui/core/'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

import '../../assets/css/form.css'

export default function InputAdress() {

  const { register } = useForm()

     // Styles do ALERT 
     const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    }));

   // Handle's Alert 
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
 
   const handleOpen = () => {
       setOpen(true);
     };
 
   const handleClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
 
     setOpen(false);
   };

  // Formatador Regex do valor do input para formato padrão de CEP (XX.XXX-XXX)
  // Função interna preenchimento automatico ipunts (dados vem de uma API externa pode demorar um pouco)
  const normalizeNumber = (value) => {
    let cep = value

    let re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/
    let formatCep = value.replace(re, "$1.$2-$3")

    async function apiBrasil(cep) {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        const data = await response.json()

        // #===================================================#
        // #         PRENCHIMENTO AUTOMATICO INPUTS            #
        // #===================================================#
        //----------------------RUA-----------------------------
        if (data.street !== undefined && data.street !== null) {
          document.getElementById('rua').value = data.street
        } else {
          document.getElementById('rua').value = ''
        }
        //----------------------BAIRRO-----------------------------
        if (data.neighborhood !== undefined && data.neighborhood !== null) {
          document.getElementById('bairro').value = data.neighborhood
        } else {
          document.getElementById('bairro').value = ''
        }
        //----------------------CIDADE----------------------------
        if (data.city !== undefined && data.city !== null) {
          document.getElementById('cidade').value = data.city
        } else {
          document.getElementById('cidade').value = ''
        }
        //----------------------ESTADO----------------------------
        if (data.state !== undefined && data.state !== null) {
          document.getElementById('uf').value = data.state
        } else {
          document.getElementById('uf').value = ''
        }
        //----------------------CEP----------------------------
        //---------ALERTA DE CEP INVALIDO (ERRO)---------------
        if (data.cep == undefined || data.cep == null) {
          document.getElementById('cep').value = ''
            return handleOpen()
        } else if (value == '') {
          return handleClose()
        } else {
          return handleClose()
        }
      } catch (e) {
        console.log('[ERRO na API]', e)
        document.getElementById('cep').value = ''

      }
    }

    apiBrasil(cep)
    return formatCep
  }

  return (

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetCep">
          <input
            placeholder="CEP"
            name="cep"
            autoComplete="CEP"
            inputMode="numeric"
            id="cep"
            className="inputCep"
            size="10"
            maxlength="9"
            onBlur={(event) => {
              const { value } = event.target
              event.target.value = normalizeNumber(value)
            }}
            ref={register}
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetStreet">
          <input
            placeholder="Endereço"
            name="rua"
            id="rua"
            className="inputStreet"
            disabled
            value=""
            size="50"
            maxlength="49"
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetHouseNumber">
          <input
            placeholder="N°"
            name="numero"
            type="number"
            id="numero"
            autoComplete="Sem N°"
            inputMode="numeric"
            size="10"
            maxlength="9"
            className="inputHouseNumber"
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetComplement">
          <input
            placeholder="Complemento"
            name="complement"
            autoComplete="complement"
            inputMode="numeric"
            id="complement"
            className="inputLocal"
            size="10"
            maxlength="9"
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetDistrict">
          <input
            placeholder="Bairro"
            name="bairro"
            autoComplete="bairro"
            inputMode="numeric"
            id="bairro"
            value=""
            className="inputLocal"
            size="10"
            maxlength="9"
            disabled
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetCity">
          <input
            placeholder="Cidade"
            name="cidade"
            autoComplete="cidade"
            inputMode="numeric"
            value=""
            id="cidade"
            className="inputLocal"
            size="10"
            maxlength="9"
            disabled
          />
        </fieldset>
      </Grid>
      <Grid item xs={12} sm={6} className="inputForm">
        <fieldset className="fieldsetUF">
          <input
            placeholder="UF"
            name="uf"
            autoComplete="UF"
            inputMode="numeric"
            id="uf"
            value=""
            className="inputLocal"
            size="10"
            maxlength="9"
            disabled
            value=""
          />
        </fieldset>
      </Grid>
      <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert
         onClose={handleClose}
         severity="error">
        CEP invalido, verifique os dados e tente novamente!
        </Alert>
        </Snackbar>
      </div>
    </Grid>
  );
}