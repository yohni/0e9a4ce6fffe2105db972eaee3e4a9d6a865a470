import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";

const SlideWrapper = styled.div`
  overflow-y: hidden;
  background: #ffffff;
`;
const Slider = styled.div`
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DatePicker = ({ children }) => {
  return (
    <ThemeProvider theme={Themes}>
      <SlideWrapper>
        <Slider>{children}</Slider>
      </SlideWrapper>
    </ThemeProvider>
  );
};

export default DatePicker;
