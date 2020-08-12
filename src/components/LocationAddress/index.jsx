import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const Wrapper = styled.div`
  font-size: ${(props) => props.theme.FontSizes.xs};
  margin: 0 ${(props) => props.theme.Boxes.sm};
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SendingAdd = styled.div`
  font-size: ${(props) => props.theme.FontSizes.md};
  font-weight: 600;
`;
const LocationAddress = () => {
  return (
    <ThemeProvider theme={Themes}>
      <Wrapper>
        <div>ALAMAT PENGIRIMAN</div>
        <LocationWrapper>
          <SendingAdd>Tokopedia Tower</SendingAdd>
          <ArrowDownIcon color={Themes.Palletes.PinkPrimary} />
        </LocationWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default LocationAddress;
