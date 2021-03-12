import React from 'react'
import { useForm } from 'react-hook-form'

// const normalizeNumber = (value) => {

// }

//verificador de senhas iguais 



function senha() {
  let input1 = document.getElementById('password1').value
  let input2 = document.getElementById('password2').value

  let div = document.getElementById('password')

  // validador de senhas dos inputs iguais
  if (input1 && input2 ){
    div.document.innerHTML('Senhas nao correspondem!')
  } 
  // validador de força de senha 


}


// validor de senha abaixo (nivel força de senha )
// A raiva atrapalha raciocinio 



export default function InputPassword() {
  
  
  const { register } = useForm();

  return (
    <React.Fragment>
      <fieldset className="fieldsetPassword">
        <input

          label="Senha"
          type="password"
          placeholder="Crie uma senha com 8 caracteres *"
          name="password"
          value=""
          onBlur={(event) => {
            const {value} = event.target
            event.target.value = normalizeText(value)
          }}
          className="input2"
          id="password2"
        />
        </fieldset>
        <fieldset className="fieldsetPassword">
          <input

            label="Senha"
            type="password"
            placeholder="Digite a senha novamente *"
            name="password"
            className="input2"
            value=""
            onBlur={(event) => {
              const {value} = event.target
              event.target.value = normalizeText(value)
            }}
             ref={register}
             id="password1"
          />
        </fieldset>
        <div id="password" ></div>
    </React.Fragment>
  );
}