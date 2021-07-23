import React, {useState} from "react";

import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();

  }
  return (
    <section className="login">
      <div className="container">
        <form action="/meals" className="form">
          <h1 className="form-header">Войти сейчас</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Войти" className="login-button" onClick={()=>signIn}/>
          <p className="forgot">Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink></p>
        </form>
      </div>
    </section>
  );
}

export default Login;
