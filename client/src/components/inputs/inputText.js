import React from 'react'
import {useForm} from 'react-hook-form'

export default function InputText() {
    const normalizeText = (value) => {
        let str = `${value}`
        return str || ""
      }
    const { register } = useForm();
  return (
    <input
          placeholder="Nome Paciente"
          autoComplete="Paciente"
          name="nome_paciente"
          id="nome_paciente"
          className="input"
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeText(value)
          }}
          ref={register}
        />
  );
}