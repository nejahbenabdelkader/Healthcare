import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Towns } from "../Info/Data";
import { ServicesH2 } from "../Services/ServiceElements";
import { SearchBarDoctorWrapper } from "./DiscoverElements";

const SearchBarDoctor = ({handleClick}) => {
  const specialities = [
    {
      value: "USD",
      label: "Généraliste",
    },
    {
      value: "EUR",
      label: "Nutritioniste",
    },
    {
      value: "BTC",
      label: "Densite",
    },
    {
      value: "JPY",
      label: "Cardiologue",
    },
    {
      value: "JPY",
      label: "Dermatologue",
    },
    {
      value: "JPY",
      label: "Pédiatre",
    },
  ];
  return (
    <SearchBarDoctorWrapper>
      <TextField label="Name of the doctor" />
      <TextField select label="Speciality">
        {specialities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField select label="Town">
        {Towns.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" fullWidth onClick={handleClick}>
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDoctorWrapper>
  );
};

export default SearchBarDoctor;
