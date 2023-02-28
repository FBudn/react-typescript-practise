import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./Pages/SignUpPage/SignUpPage";
import Login from "./Pages/LoginPage/LoginPage";
import TestPage from "./Pages/TestPage/TestPage";

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp navigate={navigate} />} />
        <Route path="/Login" element={<Login navigate={navigate} />} />
        <Route path="/" element={<Login navigate={navigate} />} />
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
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
