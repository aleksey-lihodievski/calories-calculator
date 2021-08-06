import React, { useState } from "react";
import "../Search.css";

import Search from "./search";

function Meal({ children, mealType, className }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={className ? `meal ${className}` : "meal"}
      onClick={() => setActive(true)}
    >
      {children}
      <Search
        active={active}
        setActive={setActive}
        meal={mealType}
      ></Search>
    </div>
  );
}

export default Meal;
