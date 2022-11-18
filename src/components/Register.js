import React from 'react';

function Register() {
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
            <p className='auth-form__title'>Inscrever-se</p>
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
              Inscrever-se
            </button>
            <p className='auth-form__text'>
              Já é um membro? Faça o login aqui!
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;