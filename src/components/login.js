import React, { useState } from "react";

import { NavLink, useHistory } from "react-router-dom";

import "../Login.css";

import { auth } from "../firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/meals");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(email);
  return (
    <section className="login">
      <div className="container">
        <form className="form">
          <h1 className="form-header">Войти сейчас</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Войти"
            className="login-button"
            onClick={(e) => signIn(e)}
          />
          <p className="forgot">
            Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
