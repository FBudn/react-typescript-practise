import React from "react";
import { Background, MaxWidth } from "./Components/Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

const App: React.FC = () => {
  /*useEffect(() => {
    console.log(`jestem`);
  }, []); */ //nie potrzebny bez zewnętrznych "systemów" i do user eventów

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
// w apie przejście między loginem a signupem tylko. Stylowanie backgroundu na całość tu lub osobno w Login Signup na ten moment obojętne
// Ewentualnie background maxwith i switcha wrzucić w fima?
