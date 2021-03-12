import React from 'react'
import {useForm} from 'react-hook-form'

const normalizeNumber = (value) => {

    if(value === String){
      return console.log('senha fraca')
    } else if (value === String && Number) {
      return console.log('Senha mediana')
    } else {
      return console.log('Senha forte')
    }

    return value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2").substr(0, 15) || ""
  }

export default function InputNumberPhone() {
    const { register } = useForm();
  return (
    <input
          placeholder="(11) 99999-9999"
          type="tel"
          inputMode="numeric"
          autoComplete="phone"
          name="celular_paciente"
          id="celular_paciente"
          className="input"
          required
          // onChange={(event) => {
          //   const {value} = event.target
          //   event.target.value = normalizeNumber(value)
          // }}
          // ref={register}
        />
  );
}