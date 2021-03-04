import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Bbb from "./pages/bbb";
import Ccc from "./pages/ccc";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to="/bbb">bbb</Link>
        <Link to="/ccc">ccc</Link>
      </div>
      <div className="body">
        <Route path="/bbb" component={Bbb}></Route>
        <Route path="/ccc" component={Ccc}></Route>
      </div>
    </div>
  );
}

export default App;
