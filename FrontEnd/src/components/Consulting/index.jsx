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
  const [searchResult, setSearchResult] = useState([
    {
      id: 71,
      password: "$2a$10$TwVbDaPIuHGhGMt.vXvIC.gYnPRM2kBnJA3h2VHM0I8eGf6qB.74W",
      gender: "m",
      email: "hentatiFaycal@gmail.com",
      role: "DOCTOR",
      fullName: "hentatiFaycal",
      speciality: "NEUROLOGIE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      phoneNumber: "58129294",
      activate: null,
      dateInscrit: null,
      profilePicture: null,
      pharmacy: null,
      firm: {
        town: "Tunis La Marsa",
        firmName: "",
        address: " Rue de L'Euro Immeuble Premium Lac II, Les Berges du Lac",
        cordinate: "36.8461865,10.2709386",
        id: 71,
      },
    },
    {
      id: 135,
      password: "$2a$10$URj.UGxY7nY7LYx.pED4remncqqLlSA.sz5dsCYXSRJ4G1Z/O//Xy",
      gender: "m",
      email: "aliSayari@gmail.com",
      role: "DOCTOR",
      fullName: "aliSayari",
      speciality: "MEDECINE GENERALE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      phoneNumber: "54546024",
      activate: null,
      dateInscrit: null,
      profilePicture: null,
      pharmacy: null,
      firm: {
        town: "Ariana La Soukra",
        firmName: "",
        address:
          "72 Avenue de la cité sportive (route de chotrana) Borj Louzir 2073 Ariana",
        cordinate: "36.88286659043327,10.207329599529885",
        id: 135,
      },
    },
    {
      id: 161,
      password: "$2a$10$8LaezoKuLstJ.VgitMLcDO6BTF35Ip66Qcs9L.oZtfpXcfO.POtq2",
      gender: "m",
      email: "ananeSonia@gmail.com",
      role: "DOCTOR",
      fullName: "ananeSonia",
      speciality: "PARASITOLOGIE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      phoneNumber: " 697 575",
      activate: null,
      dateInscrit: null,
      profilePicture: null,
      pharmacy: null,
      firm: {
        town: "Ariana Ariana Ville",
        firmName: "",
        address:
          "Centre médical SAPHIR, 1er étage, Cabinet A1-2, Avenue Mustapha Mohsen, Ariana, Tunisie",
        cordinate: "36.86671266044948,10.20583351757125",
        id: 161,
      },
    },
    {
      id: 156,
      password: "$2a$10$XjLqbrrVtJ/rSVI45ScgY.U21fKf9.P3MuhQdXYLZFI7mELUWFNk6",
      gender: "m",
      email: "docteurGharbiNedra@gmail.com",
      role: "DOCTOR",
      fullName: "docteurGharbiNedra",
      speciality: "ANESTHESIE-REANIMATION",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      phoneNumber: " 267 036",
      activate: null,
      dateInscrit: null,
      profilePicture: null,
      pharmacy: null,
      firm: {
        town: "Ariana Ariana Ville",
        firmName: "",
        address:
          "Lac médical center, diamant du lac, cité des pins Lac 2 TUNIS/TN",
        cordinate: "36.83411873246263,10.225148104687491",
        id: 156,
      },
    },
    {
      id: 56,
      password: "$2a$10$JyDwAqLEdZniPPgpttzXTuxajwETGf05qpnuMnKVExf2Cf2Bw2zLe",
      gender: "m",
      email: "ayedMohsen@gmail.com",
      role: "DOCTOR",
      fullName: "ayedMohsen",
      speciality: "UROLOGIE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      phoneNumber: "71267290",
      activate: null,
      dateInscrit: null,
      profilePicture: null,
      pharmacy: null,
      firm: {
        town: "Tunis Le Kram",
        firmName: "",
        address:
          "Centre Médical Hannibal, Les Jardins du Lac II 1053 Les Berges du Lac",
        cordinate: "36.8455404,10.2824279",
        id: 56,
      },
    },
  ]);

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
        cordinate: "36.871955, 10.247275",
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
        return <PharmacyResult />;
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
