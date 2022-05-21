import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppoitmentService } from "../../../../service/AppoitmentService";
import { workingHours } from "../../../Info/Data";
import { FlexWrapperOne } from "../Data/DataElemnts";
import moment from "moment";
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
  Main,
  TimeTableWrapper,
  Triangle,
} from "./TimeTableElements";
import SessionService from "../../../../service/SessionService";
const TimeTable = () => {
  const [appoitment, setAppoitment] = useState(workingHours);
  const doctorData = useSelector((state) => state.user.userData);
  const unAvailableSession = doctorData.unavailabeSessions;
  useEffect(async () => {
    const localDate = moment(new Date(), "yyyy-MM-DD-Thh:mm:ss");
    unAvailableSession.forEach((date) => {
      const unAvailableDate = moment(
        date.unavailableDate,
        "yyyy-MM-DD-Thh:mm:ss"
      ).add(1, "hours");
      console.log(unAvailableDate.format("yyyy-MM-DDThh:mm:ss"));
      if (localDate.get("week") == unAvailableDate.get("week")) {
        const date = {
          hour: unAvailableDate.get("hour"),
          minute: unAvailableDate.get("minute"),
          indexOfDay: unAvailableDate.get("weekday") - 1,
        };
        console.log(date);
        setAppoitment((prevState) => {
          const IndexOfColumn = prevState.findIndex((column) => {
            return (
              column.date.hour == date.hour && column.date.minute == date.minute
            );
          });
          if (IndexOfColumn != -1) {
            let modifiedColumn = prevState[IndexOfColumn];
            modifiedColumn.status[date.indexOfDay].statusDay = "UnAvailable";
            let newAppoitment = prevState.slice();
            newAppoitment[IndexOfColumn] = modifiedColumn;
            console.log(newAppoitment);
            return newAppoitment;
          }
        });
      }
    });
    const response = await new AppoitmentService().getAppoitmentByDoctorId(
      doctorData.id
    );
    if (response.status == 202) {
      console.log(response.data);
      response.data.map((appoitment) => {
        const dateAppoitment = moment(
          appoitment.appoitmentDate,
          "yyyy-MM-DD-Thh:mm:ss"
        );
        if (localDate.get("week") == dateAppoitment.get("week")) {
          const date = {
            hour: dateAppoitment.add(1, "hour").get("hour"),
            minute: dateAppoitment.get("minute"),
            indexOfDay: dateAppoitment.get("weekday") - 1,
          };
          console.log(date);
          setAppoitment((prevState) => {
            const IndexOfColumn = prevState.findIndex((column) => {
              return (
                column.date.hour == date.hour &&
                column.date.minute == date.minute
              );
            });
            if (IndexOfColumn != -1) {
              let modifiedColumn = prevState[IndexOfColumn];
              modifiedColumn.status[date.indexOfDay].statusDay = "Comfort";
              let newAppoitment = prevState.slice();
              newAppoitment[IndexOfColumn] = modifiedColumn;
              console.log(newAppoitment);
              return newAppoitment;
            }
          });
        }
      });
    }
  }, [doctorData]);
  const handleClickUnAvailable = async () => {
    const unAvailableSession = [];
    appoitment.map((date) => {
      date.status.map((day) => {
        if (day.statusDay == "UnAvailable") {
          const time = moment();
          time.set("weekdays", day.day + 1);
          time.set("hours", date.date.hour);
          time.set("minute", date.date.minute);
          time.set("milliseconds", 0);
          time.set("seconds", 0);
          unAvailableSession.push(time);
        }
      });
    });
    const response = await new SessionService().addSessions(
      doctorData.id,
      unAvailableSession
    );
  };
  const handleChangeAppoitment = (e) => {
    console.log(e.target.id.split(" "));
    const session = e.target.id.split(" ");
    setAppoitment((prevState) => {
      const IndexOfColumn = prevState.findIndex(
        (column) =>
          column.date.hour === session[1] && column.date.minute === session[2]
      );
      console.log(IndexOfColumn);
      let modifiedColumn = prevState[IndexOfColumn];
      const statusSession = modifiedColumn.status[session[0]].statusDay;
      if (statusSession === "") modifiedColumn.status[session[0]].statusDay = "UnAvailable";
      let newAppoitment = prevState.slice();
      console.log(modifiedColumn.status[session[0]].statusDay);
      newAppoitment[IndexOfColumn] = modifiedColumn;

      return newAppoitment;
    });
  };
  return (
    <Main id="appoitment">
      <FlexWrapperOne>
        <Header>
          <HeaderText>Appoitment</HeaderText>
        </Header>
        <Triangle />
      </FlexWrapperOne>
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
          {appoitment.map((session) => (
            <DayHoursWrapper>
              <HourTitle>{`${session.date.hour}:${session.date.minute}`}</HourTitle>
              {session.status.map((day) => (
                <DateBox
                  statusBox={day.statusDay}
                  onClick={handleChangeAppoitment}
                  id={
                    day.day +
                    " " +
                    session.date.hour +
                    " " +
                    session.date.minute
                  }
                />
              ))}
            </DayHoursWrapper>
          ))}
        </HoursWrapper>
      </TimeTableWrapper>
      <ButtonsWrapper>
        <Button
          variant="contained"
          color="error"
          onClick={handleClickUnAvailable}
        >
          UnAvailable
        </Button>
        <Button variant="contained" color="success">
          Confirm
        </Button>
      </ButtonsWrapper>
    </Main>
  );
};

export default TimeTable;
