import {useNavigate, Link} from 'react-router-dom'
import {useForm, FormAction} from '../../contexts/FormContext'
import * as C from './styles'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    } else {
      dispatch({
        type: FormAction.setCurrentStep,
        payload: 3
      })
    }
},[]);

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
        console.log(state);
    } else {
      alert("Preencha os dados");
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setEmail,
      payload: e.target.value
    });
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setGithub,
      payload: e.target.value
    })
  };
    return(
      <Theme>
        <C.Container>
            <p>Passo 3/3 </p>
            <h1>Legal !!! {state.name}, onde podemos procurar por você?</h1>
            <p>Preencha a tabela para conseguirmos entrar em contato.</p>

            <hr />

            <label>
              qual o seu e-mail?
                <input 
                  type="email"
                  value={state.email}
                  onChange={handleEmailChange}/>  
            </label>

            <label>
              qual o seu github?
                <input 
                  type="url"
                  value={state.github}
                  onChange={handleGithubChange}/>  
            </label>
            <Link to="/step2" className='backButton'>Voltar</Link>
            <button onClick={handleNextStep}>FInalizar Cadastro</button>
        </C.Container>
      </Theme>
    );
}