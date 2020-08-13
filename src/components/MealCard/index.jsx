import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme/";
import MealRating from "../StarRating";
import MainButton from "../MainButton";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.Shadows.boxShadows};
  color: ${(props) => props.theme.Palletes.GreyShadow};
  max-width: 100%;
  margin-bottom: ${(props) => props.theme.Boxes.md};

  @media (min-width: 768px) {
    max-width: calc((100% / 2.2));
  }
`;

const CardHeader = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

const CardBody = styled.div`
  background: #ffffff;
  padding: ${(props) => props.theme.Boxes.md};
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.FontSizes.md};
`;

const MealRate = styled(MealRating)`
  margin: auto ${(props) => props.theme.Boxes.sm};
`;

const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.FontSizes.lg};
  margin: ${(props) => props.theme.Boxes.sm} 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.Palletes.GreyDarken};
`;

const CardSub = styled.div`
  font-size: ${(props) => props.theme.FontSizes.sm};
  font-weight: 300;
`;

const CardFooter = styled.div`
  padding: ${(props) => props.theme.Boxes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardPrice = styled.div`
  font-size: ${(props) => props.theme.FontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.Palletes.GreyDarken};
`;

const MealCard = (props) => {
  const { name, stars, price, image, addToCart } = props;
  return (
    <ThemeProvider theme={Themes}>
      <Wrapper>
        <CardHeader src={require(`../../assets/${image}.jpg`)} />
        <CardBody>
          <RateWrapper>
            <div>{stars}</div>
            <MealRate
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              stars={stars}
              readonly
            />
          </RateWrapper>
          <CardTitle>{name}</CardTitle>
          <CardSub>by Kulina &bull; Uptown Lunch</CardSub>
        </CardBody>
        <CardFooter>
          <CardPrice>{price}</CardPrice>
          <MainButton rule="primary" type="button" handleClick={addToCart}>
            ADD +
          </MainButton>
        </CardFooter>
      </Wrapper>
    </ThemeProvider>
  );
};

export default MealCard;
