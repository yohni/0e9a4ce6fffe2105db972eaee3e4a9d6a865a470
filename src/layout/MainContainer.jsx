import React from "react";
import styled, { ThemeProvider } from "styled-components";
import propTypes from "prop-types";
import Themes from "../theme/";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.Palletes.WhiteClean};
`;

const Container = styled.div`
  max-width: 768px;
  width: 100%;
  background: #ffffff;
`;

const MainContainer = ({ children }) => (
  <ThemeProvider theme={Themes}>
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  </ThemeProvider>
);

MainContainer.propTypes = {
  children: propTypes.node.isRequired,
};

export default MainContainer;
