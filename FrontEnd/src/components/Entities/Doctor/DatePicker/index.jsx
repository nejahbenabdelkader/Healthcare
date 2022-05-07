import React, { useState } from "react";
import { IconStyle, MakeACall } from "../Data/DataElemnts";

import {
  Day,
  DayNumber,
  DaysWrapper,
  DayText,
  FormButtonCreate,
  Header,
  HeaderText,
  Hour,
  HoursWrapper,
  HourText,
  Main,
  MonthSelector,
  MonthText,
  SaveButton,
} from "./DatePickerElements";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { workingHours } from "../../../Info/Data";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const days = [
  { text: "Mon", number: "7", id: "MONDAY" },
  { text: "Tue", number: "8", id: "TUESDAY" },
  { text: "Wed", number: "9", id: "WEDNESDAY" },
  { text: "Thu", number: "10", id: "THURSDAY" },
  { text: "Fri", number: "11", id: "FRIDAY" },
  { text: "Sat", number: "12", id: "SATURDAY" },
];
const DatePicker = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useHistory();
  
  const [date, setDate] = useState({ day: "", hour: "" });
  const handleHourClick = (event) => {
    setDate((prevState) => {
      return { hour: event.target.innerText, day: prevState.day };
    });
  };
  
  const handleDayClick = (event) => {
    setDate((prevState) => {
      return { day: event.target.id, hour: prevState.hour };
    });
    console.log(date);
  };

  const saveAppoitment = () => {
    if (!isLogged) navigate.push("/signin");
  };
  return (
    <Main>
      <Header>
        <HeaderText>Take An Appoitment</HeaderText>
      </Header>
      <MonthSelector>
        <IconStyle color="#fff">
          <AiOutlineLeft height={25} width={25} />
        </IconStyle>
        <MonthText>Mar 2022</MonthText>
        <IconStyle color="#fff">
          <AiOutlineRight height={25} width={25} />
        </IconStyle>
      </MonthSelector>
      <DaysWrapper>
        {days.map((day) =>
          date.day === day.number ? (
            <Day
              selected
              key={day.number}
              id={day.number}
              onClick={handleDayClick}
            >
              <DayText selected>{day.text}</DayText>
              <DayNumber selected>{day.number}</DayNumber>
            </Day>
          ) : (
            <Day key={day.number} id={day.number} onClick={handleDayClick}>
              <DayText>{day.text}</DayText>
              <DayNumber>{day.number}</DayNumber>
            </Day>
          )
        )}
      </DaysWrapper>
      <HoursWrapper>
        {workingHours.map((hour) =>
          hour.hour === date.hour ? (
            <Hour selected onClick={handleHourClick} key={hour.hour}>
              <HourText selected>{hour.hour}</HourText>
            </Hour>
          ) : (
            <Hour onClick={handleHourClick} key={hour.hour}>
              <HourText>{hour.hour}</HourText>
            </Hour>
          )
        )}
      </HoursWrapper>

      <SaveButton type="submit" onClick={saveAppoitment}>
        Save
      </SaveButton>
    </Main>
  );
};

export default DatePicker;
