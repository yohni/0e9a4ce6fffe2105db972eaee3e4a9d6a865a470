import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";
import ClearIcon from "../../components/icons/ClearIcon";

const Layer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #000);
  width: 100%;
  max-width: 768px;
  z-index: 25;
  transition: opacity 0.5s ease-in;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  ${(props) =>
    props.showlayer &&
    `
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
    transition: opacity 0.25s ease-out;
  `}
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 25px 25px 0 0;
  padding: ${(props) => props.theme.Boxes.md};
  transition: all 0.5s;
  min-height: 75vh;
  transform: translateY(100vh);

  ${({ showBS }) =>
    showBS &&
    `
    transform: translateY(0);
  `}
`;

const CloseWrapper = styled.div`
  text-align: right;
  background: #fff;
`;

const BottomSheet = ({ showBS, closeBS, children }) => {
  return (
    <ThemeProvider theme={Themes}>
      <Layer showlayer={showBS} onClick={closeBS}>
        <Wrapper
          showBS={showBS}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseWrapper>
            <span onClick={closeBS}>
              <ClearIcon color={Themes.Palletes.GreyDarken} />
            </span>
          </CloseWrapper>
          {children}
        </Wrapper>
      </Layer>
    </ThemeProvider>
  );
};

export default BottomSheet;
