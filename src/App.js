import "./App.css";
import "@material-ui/core";
import Calories from "./components/calories";
import Navigation from "./components/navigation";
import Login from "./components/login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
let reloads = 0;

function App() {
  // const url = window.location.href.split("/");
  // console.log(url[url.length - 1] === "");
  // if (url[url.length - 1] === "") {
  //   return (
  //     <BrowserRouter>
  //       <Redirect to="/meals"></Redirect>
  //     </BrowserRouter>
  //   );
  // }
  // if (!reloads) {
  //   window.location.reload();
  //   reloads++;
  // }
  if (true) {
    return (
      <BrowserRouter>
        <Route path="/" component={Login}></Route>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Route exact path="/meals" component={Calories} />
        <Route path="/statistics" component={Calories} />
        <Route path="/settings" component={Calories} />
      </BrowserRouter>
    );
  }
}

export default App;
