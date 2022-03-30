import { Button, Collapse } from "@mui/material";
import React, { useState } from "react";
import Doctor from "../Entities/Doctor";
import DataDoctor from "../Entities/Doctor/Data/Index";
import DataDrug from "../Entities/Drug";
import Drug from "../Entities/Drug/DrugData";
import PharmacyResult from "../Entities/Pharmacy/Profile";
import { doctorData, searchDoctor, searchDrug } from "../Info/Data";
import { ServicesH2 } from "../Services/ServiceElements";
import { InfoContainer, InfoWrapper, ButtonsWrapper } from "./DiscoverElements";
import SearchBarDoctor from "./SearchBarDoctor";
import SearchBarDrug from "./SearchBarDrug";
import SearchBarPharmacy from "./SearchBarPharmacy";

const Consulting = ({ lightBg, id }) => {
  const [searchType, setSearchType] = useState("doctor");
  const [search, setSearch] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const handleSearchClick = (dataSearch) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const positionUser = {
        lat: data.coords.latitude,
        lon: data.coords.longitude,
      };
      console.log({ ...dataSearch, positionUser, searchType: searchType });
    });
    setSearch(true);
  };
  const ClickMoreButton = () => {
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
          {searchType === "pharmacy" && (
            <SearchBarPharmacy handleClick={handleSearchClick} />
          )}
          <>
            <Collapse timeout={2000} in={moreInfo}>
              {!search && searchType == "doctor" && moreInfo && (
                <Doctor doctorInfo={doctorData} />
              )}
              {!search && searchType == "drug" && moreInfo && <Drug />}
            </Collapse>
            <Collapse timeout={2000} in={search}>
              {search &&
                searchType === "doctor" &&
                searchDoctor.map((doctor) => (
                  <DataDoctor
                    {...doctor}
                    handleAppoitmentClick={ClickMoreButton}
                  />
                ))}
              {search && searchType === "pharmacy" && <PharmacyResult />}
              {search &&
                searchType === "drug" &&
                searchDrug.map((drug) => (
                  <DataDrug {...drug} handleAppoitmentClick={ClickMoreButton} />
                ))}
            </Collapse>
          </>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Consulting;
