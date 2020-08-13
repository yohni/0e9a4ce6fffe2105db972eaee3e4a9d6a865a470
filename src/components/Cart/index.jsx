import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ShopcartIcon from "../icons/ShopcartIcon";

const Layer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;

const Wrapper = styled.button`
  border: none;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.Boxes.sm};
  background: ${({ theme }) => theme.Palletes.BrownChoco};
  padding: ${({ theme }) => theme.Boxes.sm};
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.FontSizes.sm};
  border-radius: 2px;
`;

const Total = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.FontSizes.md};
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowWrapper = styled.div`
  transform: rotate(270deg);
`;
const IconWrapper = styled.div`
  display: flex;
`;

const Cart = ({ price, handleClick }) => {
  return (
    <ThemeProvider theme={Themes}>
      {price && (
        <Layer>
          <Wrapper onClick={handleClick}>
            <TotalWrapper>
              <Total>1 Items | {price}</Total>
              <span>Termasuk ongkos kirim</span>
            </TotalWrapper>
            <IconWrapper>
              <ShopcartIcon color="#fff" />
              <ArrowWrapper>
                <ArrowDownIcon color="#fff" />
              </ArrowWrapper>
            </IconWrapper>
          </Wrapper>
        </Layer>
      )}
    </ThemeProvider>
  );
};

export default Cart;
