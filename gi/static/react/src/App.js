import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import DatasetOverview from "./DatasetOverview";
import DatasetDetail from "./DatasetDetail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const handleLoginClick = login => {
    setUser(login);
  };
  return user ? (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <DatasetOverview />
          </Route>
          <Route path="/dataset/:id">
            <DatasetDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <Login handleLoginClick={handleLoginClick} />
  );
}

export default App;
