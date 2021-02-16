import React from 'react'
import {useForm} from 'react-hook-form'

const normalizeText = (value) => {
    let str = `${value}`
    return str || ""
  }

export default function InputText() {
    const { register, handleSubmit } = useForm();
  return (
    <input
          placeholder="Nome Paciente"
          type="text"
          autoComplete="Paciente"
          name="nome_paciente"
          id="nome_paciente"
          className="input"
          fullWidth
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeText(value)
          }}
          ref={register}
        />
  );
}