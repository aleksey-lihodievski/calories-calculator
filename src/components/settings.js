import React from "react";

import Logo from "../images/user.svg";
import "../Settings.css";

import firebase, { auth } from "../firebase";

function Settings() {
    const handleSignOut = function () {
        if(auth){
            auth.signOut();
        }
    }
  return (
    <section className="settings">
      <div className="container containerForLogos">
        <div className="logo-area">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="container user-settings">
        <h1>Настройки</h1>
        <ul className="settings-list">
          <li>
            Норма калорий{" "}
            <input
              type="number"
              className="calories-daily"
              from="1000"
              to="4000"
            />
          </li>
        </ul>
        <input type="button" value="Выйти" className="signOut-button" onClick={handleSignOut}/>
      </div>
    </section>
  );
}

export default Settings;
