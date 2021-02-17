import React from 'react'
import '../assets/css/dataCompleta.css'

function  DataCompleta() {
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "novembro", "dezembro"]
    let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    let d = new Date();

    let str = `${d}`
    let diaDehoje = str.substring(7, 10)
    let diaDaSemana = semana[d.getDay()]
    let mesDoAno = mes[d.getMonth()]
    let anoAtual = d.getFullYear()
    
    let dataCompleta = `${diaDaSemana}, ${diaDehoje} ${mesDoAno} ${anoAtual}`

  return (
    <h2 className="date">
      {dataCompleta}
    </h2>
  );
}

export default DataCompleta;

