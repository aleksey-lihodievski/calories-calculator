import React from "react";

import { BrowserRouter, NavLink, Switch } from "react-router-dom";

function NavigationElement(props) {
  // let cls = ["nav-element"];
  // if (props.active) {
  //   cls.push("active");
  let name = props.leave;
  // console.log(name.split('').shift());
  name = name.split('')
  name.shift();
  name = name.join('');
  return (
    <li className="nav-element">
      <NavLink to={props.leave} activeClassName="active">
        <img src={props.image} alt={props.tab} className="icon" id={name}/>
        {/* <p className="navigation-element__tab-name" data-value={props.tab}>&nbsp;{props.tab}</p> */}
      </NavLink>
    </li>
  );
}

export default NavigationElement;
