import React from 'react'
import {useForm} from 'react-hook-form'

const normalizeOptions = (value) => {
  let str = `${value}`
  return str || ""
}

export default function SelectStatus() {
    const { register, handleSubmit } = useForm();
  return (
    <select
          name="status_ativo"
          id="status_ativo"
          className="input"
          fullWidth
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeOptions(value)
          }}
          ref={register}
        >   
            <option>-Selecione-</option>
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
        </select>
  );
}