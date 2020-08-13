import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../../theme";
import BottomSheet from "../BottomSheet";
import PinIcon from "../icons/PinIcon";
import LocItem from "./LocItem";

const fakeLocs = [
  {
    id: "1",
    name: "Kulina",
    detail:
      "Gedung Kulina Lt. 3, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
  },
  {
    id: "2",
    name: "Block 71 Jogja",
    detail:
      "Jl. Prof. Herman Yohanes No.1212, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
  },
  {
    id: "3",
    name: "Rumah",
    detail:
      "Kutu Dukuh, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284",
  },
  {
    id: "4",
    name: "Antology",
    detail:
      "Komplek Danau Teratai, Jl. MH. Thamrin, RT.03/RW.08, Cijayanti, Kec. Babakan Madang, Bogor, Jawa Barat 16810",
  },
];

const BSTitle = styled.h3`
  color: ${(props) => props.theme.Palletes.GreyDarken};
  font-size: ${({ theme }) => theme.FontSizes.xl};
  line-height: 140%;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme }) => theme.Palletes.GreySmooth} solid 1px;
  border-radius: 2px;
  width: 100%;
`;
const Input = styled.input`
  font-size: ${({ theme }) => theme.FontSizes.md};
  padding: ${({ theme }) => theme.Boxes.sm};
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  &:focus {
    outline: none;
  }
`;

const LocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  transition: all 0.5s;
  transform: translateY(100vh);

  ${({ isShow }) =>
    isShow &&
    `
    transform: translateY(0);
  `}
`;

const SearchLocation = (props) => {
  const [queryInput, setQueryInput] = useState(null);

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  };

  const { showBS, closeBS } = props;
  return (
    <ThemeProvider theme={Themes}>
      <BottomSheet showBS={showBS} closeBS={closeBS}>
        <BSTitle>
          Cek makanan yang tersedia <br /> di lokasi kamu!
        </BSTitle>
        <InputGroup>
          <PinIcon color={Themes.Palletes.PinkPrimary} />
          <Input type="text" onChange={handleChange} />
        </InputGroup>
        <LocationsWrapper isShow={queryInput && queryInput.length > 2}>
          {fakeLocs.map((item) => (
            <LocItem
              key={item.id}
              name={item.name}
              detail={item.detail}
              handleClick={closeBS}
            />
          ))}
        </LocationsWrapper>
      </BottomSheet>
    </ThemeProvider>
  );
};

export default SearchLocation;
