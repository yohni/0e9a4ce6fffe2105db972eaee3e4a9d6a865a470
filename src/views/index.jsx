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
import SearchLocation from "../components/LocationAddress/SearchLocation";
import Cart from "../components/Cart";
import { getDates } from "../helpers";

const datesData = getDates(new Date(), new Date().addDays(14));

const meals = [
  {
    id: "1",
    name: "Mushroom Rice with Melted Moza",
    rate: "4.5",
    price: "Rp 45.000",
    image: "meal1",
    type: "Lunch",
  },
  {
    id: "2",
    name: "Spaghetti Carbonara Spicy Sauce",
    rate: "4",
    price: "Rp 50.000",
    image: "meal2",
    type: "Lunch",
  },
  {
    id: "3",
    name: "Creamy Mayo Seafood Soup",
    rate: "3.7",
    price: "Rp 35.000",
    image: "meal3",
    type: "Dinner",
  },
  {
    id: "4",
    name: "Healthy Ramen with Boiled Shrimp",
    rate: "4.8",
    price: "Rp 60.000",
    image: "meal4",
    type: "Dinner",
  },
  {
    id: "5",
    name: "Special Pempek with Extra Soft Cheese Sauce",
    rate: "4.8",
    price: "Rp 30.000",
    image: "meal5",
    type: "Lunch",
  },
  {
    id: "6",
    name: "Original Ramen with Sliced Chicken",
    rate: "4.2",
    price: "Rp 27.000",
    image: "meal6",
    type: "Lunch",
  },
];

const Navbar = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: ${(props) => props.theme.Boxes.md};
`;

const NavbarWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const DateSent = styled.div`
  transition: all 0.5s;
  font-size: ${(props) => props.theme.FontSizes.md};
  font-weight: 600;
  margin: ${(props) => props.theme.Boxes.lg} 0;
`;

const Container = styled.div`
  transform: translateY(47px);
  padding: ${(props) => props.theme.Boxes.md};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const HomePage = () => {
  const [showTab, setShowTab] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [pickedDate, setPickedDate] = useState(null);
  const [timeType, setTimeType] = useState("Lunch");
  const [showBS, setShowBS] = useState(false);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
      setShowTab(document.body.getBoundingClientRect().top > scrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handlePickDate = (date) => (e) => {
    setPickedDate(date);
  };

  const setLunch = () => {
    setTimeType("Lunch");
  };

  const setDinner = () => {
    setTimeType("Dinner");
  };

  const OpenBS = () => {
    setShowBS(true);
  };
  const CloseBS = () => {
    setShowBS(false);
  };
  const tabItem = [
    { id: "0", name: "Lunch", func: setLunch },
    { id: "1", name: "Dinner", func: setDinner },
  ];

  const addToCart = (item) => () => {
    setCart(item);
    console.log(cart);
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
            <LocationAddress handleClick={OpenBS} />
          </Navbar>
          <DatePicker>
            {datesData.map((itm) => (
              <DateItem
                key={itm.dayNumb}
                disabled={itm.day === "Sab" || itm.day === "Min"}
                handleClick={handlePickDate(itm)}
                actived={pickedDate && itm.dayNumb === pickedDate.dayNumb}
                day={itm.day}
                dayNumb={itm.dayNumb}
              />
            ))}
          </DatePicker>
        </NavbarWrapper>
        <TabMenu tabItem={tabItem} activeTab={timeType} showTab={showTab} />
        <Container>
          <DateSent>{pickedDate && pickedDate.date}</DateSent>
          <CardWrapper>
            {meals.map(
              (item) =>
                item.type === timeType && (
                  <MealCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    stars={item.rate}
                    price={item.price}
                    addToCart={addToCart(item)}
                  />
                )
            )}
          </CardWrapper>
        </Container>
        <Cart price={cart && cart.price} handleClick={() => setCart(null)} />
        <SearchLocation showBS={showBS} closeBS={CloseBS} />
      </MainContainer>
    </ThemeProvider>
  );
};

export default HomePage;
