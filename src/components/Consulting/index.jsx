import { TextField, Button,  RadioGroup, Radio, FormControl, FormLabel } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { ServicesH2 } from "../Services/ServiceElements";
import {
  InfoContainer,
  InfoWrapper,
  ButtonsWrapper,
} from "./DiscoverElements";
import SearchBarDoctor from "./SearchBarDoctor";
import SearchBarDrug from "./SearchBarDrug";
import SearchBarPharmacy from "./SearchBarPharmacy";

const Consulting = ({
  lightBg,
  id,
}) => {
  

  const [searchType, setSearchType] = useState("doctor");
  
  const changeSearchType = (e) => {
    console.log(e.target.id);
    setSearchType(e.target.id);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper >
          <ButtonsWrapper>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="doctor"
            >
              <ServicesH2>Doctor</ServicesH2>
            </Button>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="drug"
            >
              <ServicesH2>Drug</ServicesH2>
            </Button>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="pharmacy"
            >
              <ServicesH2>Pharmacy</ServicesH2>
            </Button>
          </ButtonsWrapper>
          {searchType === "doctor" && (
            <SearchBarDoctor />
          )}
          {searchType === "drug" && (
            <SearchBarDrug />
          )}
          {searchType === "pharmacy" && (
            <SearchBarPharmacy />
          )}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Consulting;
