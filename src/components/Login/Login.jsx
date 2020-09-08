import React from 'react';
import cls from '../../css/login.module.css';
import LoginForm from './loginform';

function Login(props) {

  function submitForm(formData) {
    console.log(formData);
    props.logIn(formData.login, formData.password);
  }

  return (
    <div className={cls.main}>
      <LoginForm onSubmit={submitForm} errorMess={props.error}/>
    </div>
  )
};

export default Login;
