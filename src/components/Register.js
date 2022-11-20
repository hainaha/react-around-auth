import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../utils/auth';

function Register(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(values).catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

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
              value={values.email}
              onChange={handleChange}
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
              value={values.password}
              onChange={handleChange}
              placeholder='Senha'
              className='auth-form__input'
              id='register_password'
              required=''
              minLength='2'
              maxLength='30'
            />
            <button
              className={'auth-form__button'}
              type='submit'
              onClick={handleSubmit}
            >
              Inscrever-se
            </button>
            <p className='auth-form__text'>
              <Link to='/signin' className='auth-form__text'>
                Já é um membro? Faça o login aqui!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
