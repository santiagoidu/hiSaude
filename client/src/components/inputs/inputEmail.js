import React from 'react'
import {useForm} from 'react-hook-form'

export default function InputEmail() {
    const normalizeText = (value) => {
        let email = `${value}`
        var pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i       
        
            console.log(email.match(pattern)); 
            return email.match(pattern);    
        
        }

    const { register } = useForm();
  return (
    <React.Fragment>
    <input
          placeholder="E-mail *"
          name="email"
          id="email"
          className="input2"
          required
          onBlur={(event) => {
            const {value} = event.target
            event.target.value = normalizeText(value)
          }}
          ref={register}
        />
    </React.Fragment>
  );
}