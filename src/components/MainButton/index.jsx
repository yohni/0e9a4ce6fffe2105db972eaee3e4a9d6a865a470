import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";

const Wrapper = styled.button`
  outline: none;
  border: none;
  background: ${(props) => props.theme.Palletes.WhiteClean};
  padding: ${(props) => props.theme.Boxes.sm} ${(props) => props.theme.Boxes.md};
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  ${(props) =>
    props.rule === "primary" &&
    `
    background: ${props.theme.Palletes.PinkPrimary};
    color: ${props.theme.Palletes.WhiteClean};
  `}
`;

const MainButton = (props) => {
  const { children, rule, handleClick } = props;
  return (
    <ThemeProvider theme={Themes}>
      <Wrapper rule={rule} onClick={handleClick}>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default MainButton;
