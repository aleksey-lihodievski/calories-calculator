import React from "react";

function Meal({children, className}) {
    let cls = [];
    cls.push('meal');
    if(className){
        cls.push(className);
    }
  return (
    <div className={cls.join(' ')}>
        {children}
    </div>
  );
}

export default Meal;
