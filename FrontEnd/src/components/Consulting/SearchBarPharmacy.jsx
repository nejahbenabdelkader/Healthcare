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

const SearchBarPharmacy = ({ handleClick }) => {
  const [data, setData] = useState({ name: "", time: "", town: "" });
  const handleChangeData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <SearchBarDoctorWrapper>
      <TextField label="Name of the Pharmacy" name="name" value={data.name} onChange={handleChangeData} />
      <FormControl sx={{ mx: 3 }}>
        <RadioGroup
          value={data.time}
          name="time"
          onChange={handleChangeData}
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
      <TextField select label="Town" name="town" value={data.town} onChange={handleChangeData}>
        {Towns.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" fullWidth onClick={() => handleClick(data)}>
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDoctorWrapper>
  );
};

export default SearchBarPharmacy;
