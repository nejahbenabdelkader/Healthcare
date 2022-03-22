import React from "react";
import { IconStyle, MakeACall } from "../Data/DataElemnts";
import {
  Day,
  DayNumber,
  DaysWrapper,
  DayText,
  Header,
  HeaderText,
  Hour,
  HoursWrapper,
  HourText,
  Main,
  MonthSelector,
  MonthText,
  SubmitButton,
} from "./DatePickerElements";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const DatePicker = () => {
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
        <Day>
          <DayText>Mon</DayText>
          <DayNumber>7</DayNumber>
        </Day>
        <Day>
          <DayText>Mon</DayText>
          <DayNumber>7</DayNumber>
        </Day>
        <Day>
          <DayText>Mon</DayText>
          <DayNumber>7</DayNumber>
        </Day>
        <Day>
          <DayText>Mon</DayText>
          <DayNumber>7</DayNumber>
        </Day>
        <Day>
          <DayText>Mon</DayText>
          <DayNumber>7</DayNumber>
        </Day>
      </DaysWrapper>
      <HoursWrapper>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
        <Hour>
          <HourText>09:00</HourText>
        </Hour>
      </HoursWrapper>
      <SubmitButton backgroundColor="#01bf71;">
        <HeaderText>Submit</HeaderText>
      </SubmitButton>
    </Main>
  );
};

export default DatePicker;
