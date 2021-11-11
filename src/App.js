import { Fragment } from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Prices from "./pages/Prices";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/prices">
        <Prices />
      </Route>
    </Switch>
  );
}

export default App;
