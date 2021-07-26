import "./App.css";
import "@material-ui/core";

import Calories from "./components/calories";
import Navigation from "./components/navigation";
import Login from "./components/login";
import Register from "./components/register";
import Settings from "./components/settings";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";

import { StateProvider, useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  const [registred, setRegistred] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setRegistred(true);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        setRegistred(false);
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  if (!registred) {
    return (
      <BrowserRouter>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Calories}></Route>
        <Route path="*">
          <Redirect to="/meals" />
        </Route>

        <Route exact path="/meals" component={Calories} />
        <Route path="/statistics" component={Calories} />
        <Route path="/settings" component={Settings} />

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Navigation></Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
