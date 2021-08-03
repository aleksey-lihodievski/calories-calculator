import React from "react";
import "../Search.css";

class Meal extends React.Component {
  constructor({ children, className, property }) {
    super();
    this.state = { active: false };
    this.cls = ["meal"];
    this.property = property;
    if (className) {
      this.cls.push(className);
    }
    this.children = children;
  }
  render() {
    return (
      <div
        className={this.cls.join(" ")}
        onClick={() => {
          this.setState({ active: !this.state.active });
        }}
      >
        {this.children}{" "}
        <Search type={this.property} active={this.state.active}></Search>
      </div>
    );
  }
}

class Search extends React.Component {
  constructor({ children, meal, active }) {
    super();
    this.activeProp = active;
    this.state = {
      active: this.activeProp,
      cls: ["search"]
    };
    if (this.state.active) {
      console.log("class added");
      this.state.cls.push("search-area__active");
    }
    this.children = children;
    this.meal = meal;
  }
  componentDidUpdate() {
    this.state.active = !this.state.active;
    if (this.state.active) {
      this.state.cls.push("search-area__active");
      console.log(this.state.cls);
    } else {
      this.state.cls.filter((item) => item === "search-area__active");
      console.log(t);
    }
    this.render();
  }
  render() {
    return (
      <div className={this.state.cls.join(" ")}>
        <p>{this.type}</p>
        {this.children}
      </div>
    );
  }
}

export default Meal;
