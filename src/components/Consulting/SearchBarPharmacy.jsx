import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Towns } from "../Info/Data";
import { ServicesH2 } from "../Services/ServiceElements";
import { SearchBarDoctorWrapper } from "./DiscoverElements";

const SearchBarPharmacy = () => {
  const [timePharmacy, setTimePharmacy] = useState("day");
  const handleChangeTimePharmacy = (event) => {
    setTimePharmacy(event.target.value);
    console.log(event.target);
  };
  return (
    <SearchBarDoctorWrapper>
      <TextField label="Name of the Pharmacy" />
      <FormControl sx={{ mx: 3 }}>
        <RadioGroup
          value={timePharmacy}
          onChange={handleChangeTimePharmacy}
          row
        >
          <FormControlLabel
            value="day"
            label="Day"
            control={<Radio />}
            sx={{ color: "text.primary" }}
          />
          <FormControlLabel
            value="night"
            control={<Radio />}
            label="Night"
            sx={{ color: "text.primary" }}
          />
        </RadioGroup>
      </FormControl>
      <TextField select label="Town" >
      {Towns.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
      <Button variant="contained" fullWidth>
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDoctorWrapper>
  );
};

export default SearchBarPharmacy;
