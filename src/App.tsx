import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./Pages/SignUpPage/SignUpPage";
import Login from "./Pages/LoginPage/LoginPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
