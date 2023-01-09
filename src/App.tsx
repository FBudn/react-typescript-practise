import React from "react";
import { Background, MaxWidth } from "./Components/Styles";
import Tile from "./Components/Tile";

const App: React.FC = () => {
  return (
    <Background>
      <MaxWidth>
        <Tile />
      </MaxWidth>
    </Background>
  );
};

export default App;
