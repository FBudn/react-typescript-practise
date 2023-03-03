import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    layout: fullscreen;
}
`;

export default GlobalStyle;
export const parameters = { layout: "fullscreen" };
