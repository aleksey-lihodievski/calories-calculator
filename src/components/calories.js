import React from "react";

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
          <div className="meal meals__breakfast">
            <h2 className="meals__header">Завтрак</h2>
            <p className="meals__compound">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              inventore officiis
            </p>
          </div>
          <div className="meal meals__lunch">
            <h2 className="meals__header">Обед</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </div>
          <div className="meal meals__dinner">
            <h2 className="meals__header">Ужин</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </div>
          <div className="meal meals__other">
            <h2 className="meals__header">Другое</h2>
            <p className="meals__compound">Омлет с компотом</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calories;
