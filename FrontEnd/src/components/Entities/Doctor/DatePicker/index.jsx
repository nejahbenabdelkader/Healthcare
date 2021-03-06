import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
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
import { AppoitmentsData, workingHours } from "../../../Info/Data";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { UserService } from "../../../../service/UserService";
import { AppoitmentService } from "../../../../service/AppoitmentService";
import { useQueries } from "react-query";
import moment from 'moment';
import Swal from "sweetalert2";
const DatePicker = ({ doctorData }) => {
  const [dateAppoitment, setDateAppoitment] = useState(new Date());
  const [unavailableDates, setUnavailableDates] = useState([]);
  useEffect( () => {
    const fetchData=async ()=>{
      const response = await new AppoitmentService().getAppoitmentByDate(
        dateAppoitment
      );
      let sessions=[] 
      sessions=response.data;
      doctorData.unavailabeSessions.forEach(date=> {
        const session=moment(date.unavailableDate);
        console.log(session.get("hour"))
        sessions.push(session)})
      setUnavailableDates(sessions);
    }
    fetchData()
  }, [dateAppoitment]);
  const isLogged = useSelector((state) => state.user.isLogged);
  const patientData = useSelector((state) => state.user.userData);
  const navigate = useHistory();
  function disableWeekends(date) {
    return date.getDay() === 0 
  }
  const handleChangeDateAppoitment = (newValue) => {
    setDateAppoitment(newValue);
  };
  const handleHourClick = (event) => {
    const session = {
      hour: event.target.id.split(":")[0],
      minute: event.target.id.split(":")[1],
    };
    setDateAppoitment(
      (prevState) =>
        new Date(prevState.setHours(session.hour, session.minute, 0, 0))
    );
  };

  const saveAppoitment = async () => {
    if (!isLogged) navigate.push("/signin");
    else {
      Swal.fire({
        title: 'Do you want to save the Appoitment?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async(result) => {
        if (result.isConfirmed) {
          const appoitment = {
            appoitmentDate: dateAppoitment,
            patient: patientData,
            doctor: doctorData,
            remarques: "",
            appoitmentStatus:"SCHEDULED"
          };
          const response = await new AppoitmentService().addAppoitment(appoitment);
          if (response.status == 200) {
            Swal.fire('Saved!', 'You will be notified by the appoitment before 24 hours', 'success')
          }
          else {
            Swal.fire('error','','error')
          }
        }
      })
     
    }
  };
  return (
    <Main>
      <Header>
        <HeaderText>Take An Appoitment</HeaderText>
      </Header>
      <MonthSelector>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={dateAppoitment}
            onChange={handleChangeDateAppoitment}
            renderInput={(params) => <TextField {...params} />}
            disablePast
            shouldDisableDate={disableWeekends}
          />
        </LocalizationProvider>
      </MonthSelector>
      <HoursWrapper>
        {workingHours
          .filter((hour) => {
            const index= unavailableDates.findIndex(
              (date) =>
                moment(date).get('hour') == hour.date.hour &&
                moment(date).get('minute') == hour.date.minute
            );
            return index==-1
          })
          .map((hour) =>
            hour.date.hour == dateAppoitment.getHours() &&
            hour.date.minute == dateAppoitment.getMinutes() ? (
              <Hour
                selected
                onClick={handleHourClick}
                key={`${hour.date.hour}:${hour.date.minute}`}
              >
                <HourText
                  selected
                >{`${hour.date.hour}:${hour.date.minute}`}</HourText>
              </Hour>
            ) : (
              <Hour>
                <HourText
                  onClick={handleHourClick}
                  id={`${hour.date.hour}:${hour.date.minute}`}
                >{`${hour.date.hour}:${hour.date.minute}`}</HourText>
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
