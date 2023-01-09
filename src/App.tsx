import React from "react";
import { Background, MaxWidth } from "./Components/Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Background>
        <MaxWidth>
          <Switch>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
        </MaxWidth>
      </Background>
    </Router>
  );
};

export default App;
