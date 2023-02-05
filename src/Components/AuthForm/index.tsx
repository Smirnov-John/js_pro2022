import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMassage, setErrorMassage] = useState('');

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submmitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMassage('пароль слишком короткий');
    } else {
      setErrorMassage('');
      console.log(formState, 'отправленно на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMassage('пароль слишком короткий');
    } else {
      setErrorMassage('');
    }
  }, [formState.password]);

  return (
    <div className={style.wrapper}>
      <h1>AUTH FORM</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')}/>
        <Input
          name={'Password'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type='password'
        />
      </div>

      {errorMassage !== ' ' && <div className={style.error}> {errorMassage} </div>}

      <button type="button" onClick={submmitHandler}>
        AUTH
      </button>
    </div>
  );
};
