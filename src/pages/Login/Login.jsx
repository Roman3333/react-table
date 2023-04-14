import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import cn from './login.module.scss';

const Login = ({ setIsAuth }) => {
  const [login, setLogin] = useState({
    user: 'admin',
    password: '12345',
  });

  const [fields, setFields] = useState({
    user: '',
    password: '',
  });

  const checkFields = (e) => {
    e.preventDefault();

    if (login.user === fields.user && login.password === fields.password) {
      setIsAuth(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <section className={cn.login}>
      <div className={cn.loginTop}>
        <div className={cn.loginLogo}>
          <Logo />
        </div>
        <div className={cn.loginTitle}>Welcome To CRM System Sign In To Your Account</div>
      </div>
      <form className={cn.loginForm} action="">
        <input
          className={cn.loginInput}
          value={fields.login}
          onChange={(e) => setFields({ ...login, user: e.target.value })}
          type="text"
          placeholder="Name"
        />
        <input
          className={cn.loginInput}
          value={fields.password}
          onChange={(e) => setFields({ ...login, password: e.target.value })}
          type="text"
          placeholder="Password"
        />
        <button className={cn.loginBtn} onClick={checkFields}>
          SIGN IN
        </button>
      </form>
    </section>
  );
};

export default Login;
