import React from 'react';
import cls from '../../css/login.module.css';
import {reduxForm, Field} from 'redux-form';

function LoginForm(props) {
  return (
    <div className={cls.inner}>
      <h1>Log In</h1>
      <form onSubmit={props.handleSubmit}>
        <Field component={"input"} name={"login"} type={"text"} placeholder={"Login"} /><br/>
        <Field component={"input"} name={"password"} type={"password"} placeholder={"Password"} /><br/>
        <label><Field component={"input"} name={"check"} type={"checkbox"} /> Remember me</label><br/>
        <button type={"submit"}>Log In</button><br />
        {props.errorMess ? <span style={{color: "red", fontStyle: "italic"}}>{props.errorMess}</span> : undefined}
      </form>
    </div>
  )
};

export default reduxForm({form: 'login'})(LoginForm);
