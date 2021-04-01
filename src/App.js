import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import {Galeria} from "./components/Galeria"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/galeria" exact component={() => <Galeria />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;