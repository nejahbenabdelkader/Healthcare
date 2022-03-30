import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Towns } from "../Info/Data";
import { ServicesH2 } from "../Services/ServiceElements";
import { SearchBarDoctorWrapper } from "./DiscoverElements";

const SearchBarDoctor = ({handleClick}) => {
  const specialities = useSelector((state) => state.specialities);
  const [data,setData]=useState({name:'',speciality:'',town:''})
  const handleChangeData=(e)=>{
          setData(prevState=> {return {...prevState,[e.target.name]:e.target.value}})
  }
  
  return (
    <SearchBarDoctorWrapper>
      <TextField label="Name of the doctor" value={data.name} name='name' onChange={handleChangeData} />
      <TextField select label="Speciality"   value={data.speciality}  onChange={handleChangeData} name='speciality'>
        {specialities.map((option) => (
          <MenuItem key={option.value} value={option.value} id='speciality'>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField select label="Town" value={data.town} name='town' onChange={handleChangeData}>
        {Towns.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" fullWidth onClick={()=>handleClick(data)}>
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDoctorWrapper>
  );
};

export default SearchBarDoctor;
