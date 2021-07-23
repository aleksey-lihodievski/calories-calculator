import React from "react";

import diary from "../images/sheet.svg";
import activeDiary from "../images/sheet-green.svg";
import statistics from "../images/statistics.svg";
import activeStatistics from "../images/statistics-green.svg";
import user from "../images/user.svg";
import activeUser from "../images/user-green.svg";

import NavigationElement from "./navigationElement";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-elements">
        <NavigationElement
          image={diary}
          activeImage={activeDiary}
          active={false}
          leave="/meals"
          tab="Дневник"
        ></NavigationElement>
        <NavigationElement
          image={statistics}
          activeImage={activeStatistics}
          active={false}
          leave="/statistics"
          tab="Статистика"
        ></NavigationElement>
        <NavigationElement
          image={user}
          activeImage={activeUser}
          active={false}
          leave="/settings"
          tab="Пользователь"
        ></NavigationElement>
      </ul>
    </nav>
  );
}

export default Navigation;
