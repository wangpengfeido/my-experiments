import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Bbb from "./pages/bbb";
import Ccc from "./pages/ccc";

function App() {
  return (
    <div className="App">
      <div>
        this is iframe page.是否在iframe中：
        {JSON.stringify(window.self !== window.top)}
      </div>
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
