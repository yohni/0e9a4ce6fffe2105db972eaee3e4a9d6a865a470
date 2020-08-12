import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../theme";
import MainContainer from "../layout/MainContainer";
import DatePicker from "../components/DatePicker";
import DateItem from "../components/DatePicker/DateItem";
import TabMenu from "../components/TabMenu";
import LocationAddress from "../components/LocationAddress";
import ArrowIcon from "../components/icons/ArrowIcon";
import MealCard from "../components/MealCard";
import { getDates } from "../helpers";

const datesData = getDates(new Date(), new Date().addDays(14));

const Navbar = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: ${(props) => props.theme.Boxes.sm};
`;

const NavbarWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const DateSent = styled.div`
  font-size: ${(props) => props.theme.FontSizes.md};
  font-weight: 600;
`;

const Container = styled.div`
  transform: translateY(47px);
  padding: ${(props) => props.theme.Boxes.md};
`;

const HomePage = () => {
  const [showTab, setShowTab] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [pickedDate, setPickedDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
      setShowTab(document.body.getBoundingClientRect().top > scrollPos);
      console.log(showTab);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const tabItem = [
    { id: "1", name: "Launch" },
    { id: "2", name: "Dinner" },
  ];

  const handlePickDate = (date) => (e) => {
    setPickedDate(date);
  };

  return (
    <ThemeProvider theme={Themes}>
      <MainContainer>
        <NavbarWrapper>
          <Navbar>
            <ArrowIcon
              color={Themes.Palletes.GreyDarken}
              width="32"
              height="32"
            />
            <LocationAddress />
          </Navbar>
          <DatePicker>
            {datesData.map((itm) => (
              <DateItem
                key={itm.dayNumb}
                disabled={itm.day === "Sat" || itm.day === "Sun"}
                handleClick={handlePickDate(itm)}
                actived={pickedDate && itm.dayNumb === pickedDate.dayNumb}
                day={itm.day}
                dayNumb={itm.dayNumb}
              />
            ))}
          </DatePicker>
        </NavbarWrapper>
        <TabMenu tabItem={tabItem} activeTab="2" showTab={showTab} />
        <Container>
          <DateSent>{pickedDate && pickedDate.date}</DateSent>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default HomePage;
