import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import moment from "moment";
import Themes from "../../theme";

const DatePicker = () => {
  const [pickedDate, setPickedDate] = useState(0);

  Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      var temp = {
        day: moment(currentDate).format("ddd"),
        dayNumb: moment(currentDate).format("DD"),
      };
      dateArray.push(temp);
      currentDate = currentDate.addDays(1);
    }

    return dateArray;
  }

  const handleClick = (day) => (e) => {
    setPickedDate(day);
  };

  const datesData = getDates(new Date(), new Date().addDays(14));

  console.log(datesData);

  const DateItem = styled.button`
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
    margin: ${(props) => props.theme.Boxes.sm};
    font-size: ${(props) => props.theme.FontSizes.sm};
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
    font-size: ${(props) => props.theme.FontSizes.lg};
    font-weight: 600;
  `;
  const SlideWrapper = styled.div`
    overflow-y: hidden;
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
  return (
    <ThemeProvider theme={Themes}>
      <SlideWrapper>
        <Slider>
          {datesData.map((itm) => (
            <DateItem
              key={itm.dayNumb}
              disabled={itm.day === "Sat" || itm.day === "Sun"}
              onClick={handleClick(itm.dayNumb)}
              actived={itm.dayNumb === pickedDate}
            >
              <div>{itm.day}</div>
              <DateItemNumb>{itm.dayNumb}</DateItemNumb>
            </DateItem>
          ))}
        </Slider>
      </SlideWrapper>
    </ThemeProvider>
  );
};

export default DatePicker;
