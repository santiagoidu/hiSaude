import React from 'react'
import {useForm} from 'react-hook-form'

export default function InputText2() {
    const normalizeText = (value) => {
        let str = `${value}`
        return str || ""
      }
    const { register } = useForm();
  return (
    <input
          placeholder="Nome *"
          name="nome"
          id="nome"
          className="input2"
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeText(value)
          }}
          ref={register}
        />
  );
}