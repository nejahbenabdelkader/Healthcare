import { Button, Collapse } from "@mui/material";
import React, { useState } from "react";
import { SearchService } from "../../service/SearchService";
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
  

  const [searchType, setSearchType] = useState("DOCTOR");
  const [selectedSearch, setSelectedSearch] = useState();
  const [search, setSearch] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const searchBar = () => {
    switch (searchType) {
      case "DOCTOR":
        return <SearchBarDoctor handleClick={handleSearchClick} />;
      case "DRUG":
        return <SearchBarDrug handleClick={handleSearchClick} />;
      case "PHARMACY":
        return <SearchBarPharmacy handleClick={handleSearchClick} />;
    }
  };
  const handleSearchClick = (e, dataSearch) => {
    e.preventDefault();
     navigator.geolocation.getCurrentPosition(async(data) => {
      const positionUser = {
        lat: data.coords.latitude,
        lon: data.coords.longitude,
      };
      const firm = {
        //cordinate: `${positionUser.lat},${positionUser.lon}`,
        cordinate: "35.830452, 10.590332",
        town: dataSearch.town,
      };
      console.log(firm);
      switch (searchType) {
        case "DOCTOR":
         const rawResponse =await new SearchService().SearchNearbyDoctors(firm, dataSearch.name, dataSearch.speciality)
         if(rawResponse.staus==200) {
           setSearchResult(rawResponse.data)
         }
          break;
        case "PHARMACY":
          const pharmacy = {
            firmName: dataSearch.firmName,
            cordinate: "36.871955, 10.247275",
            town: dataSearch.town,
            type: dataSearch.type,
          };
          new SearchService()
            .SearchNearbyPharmacy(pharmacy)
            .then((response) => {
              if (response.status == 200) {
                console.log(response.data);
                setSearchResult(response.data);
              }
            });
          break;
        case "DRUG":
          break;
      }
    });
    setSearch(true);
  };

  const searchResults = () => {
    switch (searchType) {
      case "DOCTOR":
        return searchResult.map((doctor) => (
          <DataDoctor {...doctor} handleAppoitmentClick={ClickMoreButton} />
        ));
      case "DRUG":
        return searchDrug.map((drug) => (
          <DataDrug {...drug} handleAppoitmentClick={ClickMoreButton} />
        ));
      case "PHARMACY":
        return <PharmacyResult pharmacyData={searchResult}/>;
    }
  };
  const ClickMoreButton = (e) => {
    const selectedItem = searchResult.find((item) => item.id == e.target.id);
    console.log(selectedItem);
    setSelectedSearch(selectedItem);
    setMoreInfo(true);
    setSearch(false);
  };
  const changeSearchType = (e) => {
    setSearchType(e.target.id);
    setSearch(false);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} name="Consulting">
        <InfoWrapper>
          <ButtonsWrapper>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="DOCTOR"
            >
              <ServicesH2>Doctor</ServicesH2>
            </Button>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="DRUG"
            >
              <ServicesH2>Drug</ServicesH2>
            </Button>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={changeSearchType}
              id="PHARMACY"
            >
              <ServicesH2>Pharmacy</ServicesH2>
            </Button>
          </ButtonsWrapper>
          {searchBar()}
          <>
            <Collapse timeout={2000} in={moreInfo}>
              {!search && searchType == "DOCTOR" && moreInfo && (
                <Doctor doctorInfo={selectedSearch} />
              )}
              {!search && searchType == "drug" && moreInfo && <Drug />}
            </Collapse>
            {
              <Collapse timeout={2000} in={search}>
                {searchResults()}
              </Collapse>
            }
          </>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Consulting;
