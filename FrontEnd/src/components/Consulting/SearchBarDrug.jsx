import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ServicesH2 } from "../Services/ServiceElements";
import { SearchBarDrugWrapper } from "./DiscoverElements";

const SearchBarDrug = ({handleClick}) => {
  const [data,setData]=useState({name:''})
  const handleChangeData=(e)=>{
    setData(prevState=> {return {...prevState,[e.target.name]:e.target.value}})
}
  return (
    <SearchBarDrugWrapper>
      <TextField label="Name of the Drug"  name="name" value={data.name} onChange={handleChangeData}/>
      <Button variant="contained" fullWidth onClick={(e)=>handleClick(e,data)} id="SEARCHDRUG">
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDrugWrapper>
  );
};

export default SearchBarDrug;
