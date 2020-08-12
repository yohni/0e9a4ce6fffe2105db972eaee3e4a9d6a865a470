import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme/";

const Wrapper = styled.div`
  background: #fff;
`;

const MealCard = (props) => {
  return <ThemeProvider theme={Themes}>Ini Card</ThemeProvider>;
};

export default MealCard;
