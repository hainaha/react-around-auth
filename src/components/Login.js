import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div
      // className={
      //   `popup popup_type_${props.name} ` +
      //   (props.isOpen ? 'popup_opened' : '')
      // }
      >
        <form
        // className='popup__form'
        // id={props.name}
        // name={props.name}
        // noValidate
        // onSubmit={props.onSubmit}
        >
          <div className='auth-form__container'>
            <p className='auth-form__title'>Entrar</p>
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              className='auth-form__input'
              id='register_email'
              required=''
              minLength='2'
              maxLength='30'
            />
            <input
              type='password'
              name='password'
              placeholder='Senha'
              className='auth-form__input'
              id='register_password'
              required=''
              minLength='2'
              maxLength='30'
            />
            <button className={'auth-form__button'} type='submit'>
              Entrar
            </button>
            <p className='auth-form__text'>
              <Link to='signup' className='auth-form__text'>
                Ainda não é membro? Inscreva-se aqui!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
