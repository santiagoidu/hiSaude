import React from 'react'
import {useForm} from 'react-hook-form'

export default function SelectStatus() {
  const normalizeOptions = (value) => {
    let str = `${value}`
    return str || ""
  }
    const { register } = useForm();
  return (
    <select
          name="status_ativo"
          id="status_ativo"
          className="input"
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeOptions(value)
          }}
          ref={register}
        >   
            <option selected>-Selecione-</option>
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
        </select>
  );
}