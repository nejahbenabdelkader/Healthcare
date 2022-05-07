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
  const [searchType, setSearchType] = useState("DOCTOR");
  const [selectedSearch, setSelectedSearch] = useState();
  const [search, setSearch] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const handleSearchClick = (e, dataSearch) => {
    console.log(dataSearch);
    navigator.geolocation.getCurrentPosition((data) => {
      const positionUser = {
        lat: data.coords.latitude,
        lon: data.coords.longitude,
      };
      const firm = {
        //cordinate: `${positionUser.lat},${positionUser.lon}`,
        cordinate: "36.871955, 10.247275",
        town: dataSearch.town,
      };
      switch (searchType) {
        case "DOCTOR":
          new SearchService()
        .SearchNearbyDoctors(firm, dataSearch.name, dataSearch.speciality)
        .then((response) => {
          if (response.status == 200) {
            setSearchResult(response.data);
          }
        });
          break;
        case "PHARMACY":
          const pharmacy={
            firmName:dataSearch.firmName,
            cordinate: "36.871955, 10.247275",
            town:dataSearch.town,
            type:dataSearch.type
          }
          new SearchService()
          .SearchNearbyPharmacy(pharmacy)
          .then((response) => {
            if (response.status == 200) {
              setSearchResult(response.data);
            }
          });
          break;
        case "DRUG":
          break;
        default:
          break;
      }
      console.log(dataSearch);
      
    });
    setSearch(true);
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
            <Collapse timeout={2000} in={search}>
              {search &&
                searchType === "DOCTOR" &&
                searchResult.map((doctor) => (
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
