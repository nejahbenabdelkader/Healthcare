import { Button } from "@mui/material";
import React, { useState } from "react";
import Doctor from "../Entities/Doctor";
import DataDoctor from "../Entities/Doctor/Data/Index";
import DataDrug from "../Entities/Drug";
import Drug from "../Entities/Drug/DrugData";
import PharmacyResult from "../Entities/Pharmacy/Profile";
import { searchDoctor, searchDrug } from "../Info/Data";
import { ServicesH2 } from "../Services/ServiceElements";
import { InfoContainer, InfoWrapper, ButtonsWrapper } from "./DiscoverElements";
import SearchBarDoctor from "./SearchBarDoctor";
import SearchBarDrug from "./SearchBarDrug";
import SearchBarPharmacy from "./SearchBarPharmacy";

const Consulting = ({ lightBg, id }) => {
  const [searchType, setSearchType] = useState("doctor");
  const [search, setSearch] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const handleSearchClick = () => {
    setSearch(true);
    console.log("hello");
  };
  const ClickTakeButton = () => {
    setMoreInfo(true);
    setSearch(false);
  };
  const changeSearchType = (e) => {
    setSearchType(e.target.id);
    setSearch(false);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
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
            <SearchBarDoctor handleClick={handleSearchClick} />
          )}
          {searchType === "drug" && (
            <SearchBarDrug handleClick={handleSearchClick} />
          )}
          {searchType === "pharmacy" && <SearchBarPharmacy />}
          <>
            {!search && searchType == "doctor" && moreInfo && <Doctor />}
            {!search && searchType == "drug" && moreInfo && <Drug />}

            {search &&
              searchType === "doctor" &&
              searchDoctor.map((doctor) => (
                <DataDoctor
                  {...doctor}
                  handleAppoitmentClick={ClickTakeButton}
                />
              ))}
            {search && searchType === "pharmacy" && <PharmacyResult />}
            {search &&
              searchType === "drug" &&
              searchDrug.map((drug) => (
                <DataDrug {...drug} handleAppoitmentClick={ClickTakeButton} />
              ))}
          </>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Consulting;
