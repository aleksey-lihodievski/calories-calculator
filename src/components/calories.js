import React from "react";
import Meal from "./meal";
// import Search from "./search";

import Navigation from "./navigation";

import "../Calories.css";

function Calories() {
  
  return (
    <section className="calories">
      <div className="daily-calories container">
        <h1 className="daily-calories__header">Дневные калории</h1>
        <div className="calories__stats">
          <div className="calories__elements">
            <div className="calories__element proteins">
              <div className="calories__element__name">Белки</div>
              <div className="calories__element__quantity">0г</div>
            </div>
            <div className="calories__element fats">
              <div className="calories__element__name">Жиры</div>
              <div className="calories__element__quantity">0г</div>
            </div>
            <div className="calories__element carbons">
              <div className="calories__element__name">Углеводы</div>
              <div className="calories__element__quantity">0г</div>
            </div>
          </div>
          <div className="calories__element calories">
            <div className="calories__element__name">Калории</div>
            <div className="calories__element__quantity">0ккал</div>
          </div>
        </div>
        <div className="meals">
          <Meal className="meals__breakfast" meal="Завтрак">
            <h2 className="meals__header">Завтрак</h2>
            <p className="meals__compound">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              inventore officiis
            </p>
          </Meal>

          <Meal className="meals__lunch" meal="Обед">
            <h2 className="meals__header">Обед</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </Meal>

          <Meal className="meals__dinner" meal="Ужин">
            <h2 className="meals__header">Ужин</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </Meal>

          <Meal className="meals__other" meal="Другое">
            <h2 className="meals__header">Другое</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </Meal>
        </div>
      </div>
    </section>
  );
}

export default Calories;
