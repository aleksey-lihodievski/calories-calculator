import React, { useState } from "react";

import "../Login.css";

import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if(auth) {
            history.push('/meals');
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
          <h1 className="form-header">Зарегистрироваться</h1>
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
            value="Зарегистрироваться"
            className="login-button"
            onClick={(e) => signUp(e)}
          />
          <p className="forgot">
            Есть аккаунт? <NavLink to="/login">Войти</NavLink>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
