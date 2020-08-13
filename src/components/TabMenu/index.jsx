import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";

const Wrapper = styled.div`
  padding: ${(props) => props.theme.Boxes.sm} ${(props) => props.theme.Boxes.md};
  background: #ffffff;
  position: fixed;
  top: 112 px;
  width: 100%;
  max-width: 736px;
  z-index: 19;

  @media (max-width: 768px) {
    max-width: calc(100vw - 32px);
  }
`;

const Container = styled.div`
  border-radius: 5px;
  border: ${(props) => props.theme.Palletes.WhiteClean} solid 1px;
  display: flex;
  overflow: hidden;
`;
const TabItem = styled.button`
  padding: ${(props) => props.theme.Boxes.sm};
  outline: none;
  border: none;
  text-align: center;
  width: 100%;
  background: #ffffff;

  ${(props) =>
    props.actived &&
    `
    background: ${props.theme.Palletes.GreyDarken};
    color: ${props.theme.Palletes.WhiteClean};
  `}
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
const TabMenu = ({ tabItem, activeTab, showTab }) => {
  return (
    <ThemeProvider theme={Themes}>
      <Transition>
        <Wrapper className={showTab ? "active" : "hidden"}>
          <Container>
            {tabItem.map((item) => (
              <TabItem
                key={item.id}
                actived={item.name === activeTab}
                onClick={item.func}
              >
                {item.name}
              </TabItem>
            ))}
          </Container>
        </Wrapper>
      </Transition>
    </ThemeProvider>
  );
};

export default TabMenu;
