import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./Pages/SignUpPage/SignUpPage";
import Login from "./Pages/LoginPage/LoginPage";
import TestPage from "./Pages/TestPage/TestPage";

const App: React.FC = () => {
  const navigate = useNavigate();
  const onClickLink = (url: string) => {
    navigate(url);
  };
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp onClickLink={onClickLink} />} />
      <Route path="/Login" element={<Login onClickLink={onClickLink} />} />
      <Route path="/" element={<Login onClickLink={onClickLink} />} />
      <Route path="/Test" element={<TestPage />} />
    </Routes>
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
