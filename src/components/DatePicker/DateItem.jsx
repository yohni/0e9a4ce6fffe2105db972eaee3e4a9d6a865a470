import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";

const Wrapper = styled.button`
  outline: none;
  border: none;
  transition: background-color 0.5s;
  background: none;
  border-radius: 100%;
  height: 40px !important;
  width: 40px !important;
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.Boxes.xs};
  font-size: ${(props) => props.theme.FontSizes.xs};
  color: ${(props) =>
    props.disabled
      ? props.theme.Palletes.GreySmooth
      : props.theme.Palletes.GreyDarken};
  scroll-snap-align: start;
  ${(props) =>
    props.actived &&
    `
      background-color: ${props.theme.Palletes.GreyDarken};
      color: ${props.theme.Palletes.WhiteClean};
    `}
`;

const DateItemNumb = styled.div`
  font-size: ${(props) => props.theme.FontSizes.sm};
  font-weight: 600;
`;

const DateItem = ({ day, dayNumb, actived, disabled, handleClick }) => {
  return (
    <ThemeProvider theme={Themes}>
      <Wrapper actived={actived} disabled={disabled} onClick={handleClick}>
        <div>{day}</div>
        <DateItemNumb>{dayNumb}</DateItemNumb>
      </Wrapper>
    </ThemeProvider>
  );
};

export default DateItem;
