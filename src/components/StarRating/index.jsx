import React from "react";
import styled from "styled-components";

const Stars = styled.div`
  display: inline-block;
  font-size: 16px;
  margin-left: 4px;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #fc0 calc(${(props) => props.rates} / 5 * 100%),
      #fff calc(${(props) => props.rates} / 5 * 100%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StarRating = ({ stars }) => {
  return <Stars rates={stars} />;
};

export default StarRating;
