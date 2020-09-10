import React from 'react';
import cls from '../../css/forms.module.css';

export function input({input, meta, ...props}) {
  let error = meta.touched && meta.error;
  return (
    <>
      <input {...input} {...props} className={error ? cls.errorField : ''}/>
      {error ? <><br /><span className={cls.errorMsg}>{meta.error}</span></> : undefined}
    </>
  )
}

export function textarea({input, meta, ...props}) {
  console.log(meta);
  let errorReq = meta.submitFailed && meta.error;
  let errorMax = meta.active && Array.isArray(meta.error);
  return (
    <>
      <textarea {...input} {...props} className={errorReq || errorMax ? cls.errorField : ''}/>
      {errorReq || errorMax ? <><br /><span className={cls.errorMsg}>{meta.error}</span></> : undefined}
    </>
  )
}
