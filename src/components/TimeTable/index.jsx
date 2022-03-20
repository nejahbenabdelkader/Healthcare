import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { workingHours } from "../Info/Data";
import { ServicesH1, ServicesH2 } from "../Services/ServiceElements";
import {
  ButtonsWrapper,
  DateBox,
  DayHoursWrapper,
  DaysWrapper,
  DayTitle,
  Header,
  HeaderText,
  HoursWrapper,
  HourTitle,
  TimeTableWrapper,
} from "./TimeTableElements";

const TimeTable = () => {
  const [appoitment, setAppoitment] = useState(workingHours);
  const handleChangeAppoitment = (e) => {
    console.log(e.target.id.split(" "));
    const session = e.target.id.split(" ");
    setAppoitment((prevState) => {
      const IndexOfColumn = prevState.findIndex(
        (column) => column.hour === session[1]
      );
      console.log(IndexOfColumn);
      let modifiedColumn = prevState[IndexOfColumn];
      modifiedColumn.status[session[0]].statusDay = "Comfort";
      prevState[IndexOfColumn] = modifiedColumn;
      console.log(prevState);
      return prevState;
    });
  };
  return (
    <>
      <Header>
        <HeaderText>Appoitment</HeaderText>
      </Header>
      <TimeTableWrapper>
        <DaysWrapper>
          <DayTitle>1/2 (Mon)</DayTitle>
          <DayTitle>1/3 (Tue)</DayTitle>
          <DayTitle>1/4 (Wed)</DayTitle>
          <DayTitle>1/5 (Thu)</DayTitle>
          <DayTitle>1/6 (Fri)</DayTitle>
          <DayTitle>1/7 (Sat)</DayTitle>
        </DaysWrapper>
        <HoursWrapper>
          {appoitment.map((date) => (
            <DayHoursWrapper>
              <HourTitle>{date.hour}</HourTitle>
              {date.status.map((day) => (
                <DateBox
                  statusBox={day.statusDay}
                  onClick={handleChangeAppoitment}
                  id={day.day + " " + date.hour}
                />
              ))}
            </DayHoursWrapper>
          ))}
        </HoursWrapper>
      </TimeTableWrapper>
      <ButtonsWrapper>
        <Button variant="contained" color="error">
          UnAvailable
        </Button>
        <Button variant="contained" color="success">
          Confirm
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default TimeTable;
