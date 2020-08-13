import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";
import PinIcon from "../icons/PinIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.Boxes.md} 0;
`;
const IconWrapper = styled.div`
  border-radius: 100%;
  background: ${({ theme }) => theme.Palletes.GreySmooth};
  min-height: 32px;
  min-width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.Boxes.sm};
`;
const DetailWrapper = styled.div`
  color: ${({ theme }) => theme.Palletes.GreyShadow};
  font-size: ${({ theme }) => theme.FontSizes.sm};
`;
const NameLoc = styled.div`
  color: ${({ theme }) => theme.Palletes.GreyDarken};
  font-size: ${({ theme }) => theme.FontSizes.md};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
`;

const Detail = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 264px;
`;

const LocItem = ({ name, detail, handleClick }) => (
  <ThemeProvider theme={Themes}>
    <Wrapper onClick={handleClick}>
      <IconWrapper>
        <PinIcon />
      </IconWrapper>
      <DetailWrapper>
        <NameLoc>{name}</NameLoc>
        <Detail>{detail}</Detail>
      </DetailWrapper>
    </Wrapper>
  </ThemeProvider>
);

export default LocItem;
