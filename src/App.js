import React from 'react';
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
