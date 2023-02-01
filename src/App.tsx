import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
// w apie przejście między loginem a signupem tylko. Stylowanie backgroundu na całość tu lub osobno w Login Signup na ten moment obojętne
// Ewentualnie background maxwith i switcha wrzucić w fima?

/*
Bardziej atomic/reużywalne u mnie:
- input jako header+input ,
- kontener zastępujący diva, na zaś uniwersalny do zmieniania propsami
- button z kolorem etc
- tło?
- checkbox z miejscem na label nwm


PYTANIA: 
  W package.json
  "style:prettier": "prettier --check" i && run style:prettier w style:all + tsc czy jest sens
*/
