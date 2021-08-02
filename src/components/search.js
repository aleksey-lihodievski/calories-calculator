import React from "react";
import "../Search.css";

function Search({children}) {
  return (
    <div className="search search-area__active">
        {children}
    </div>
  );
}

export default Search;
