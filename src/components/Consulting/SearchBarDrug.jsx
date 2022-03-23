import { Button, TextField } from "@mui/material";
import React from "react";
import { ServicesH2 } from "../Services/ServiceElements";
import { SearchBarDrugWrapper } from "./DiscoverElements";

const SearchBarDrug = ({handleClick}) => {
  return (
    <SearchBarDrugWrapper>
      <TextField label="Name of the Drug" />
      <Button variant="contained" fullWidth onClick={handleClick}>
        <ServicesH2>Search Now</ServicesH2>
      </Button>
    </SearchBarDrugWrapper>
  );
};

export default SearchBarDrug;
