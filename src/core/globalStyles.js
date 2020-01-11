import { createGlobalStyle } from "styled-components";

import antd from "antd/dist/antd.css";

const Styles = createGlobalStyle`
@import ${antd};


body {
    font-family: "Quicksand", sans-serif;
    margin:0;
    padding:0;
}

a {
    text-decoration: none;
    outline: none;
}
`;

export default Styles;
