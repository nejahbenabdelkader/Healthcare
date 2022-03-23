import React from "react";
import PharmacyDetails from "./PharmacyData";
import { Main } from "./ProfileElements";
const PharmacyData = [
  {
    name: " Pharmacy hedi jouini",
    phoneNumber: "+216 95846231",
    location: "CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE",
  },
  {
    name: " Pharmacy hedi jouini",
    phoneNumber: "+216 95846231",
    location: "CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE",
  },
  {
    name: " Pharmacy hedi jouini",
    phoneNumber: "+216 95846231",
    location: "CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE",
  },
  {
    name: " Pharmacy hedi jouini",
    phoneNumber: "+216 95846231",
    location: "CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE",
  },
];
const PharmacyResult = () => {
  return (
    <Main>
      {PharmacyData.map((pharmacy) => (
        <PharmacyDetails {...pharmacy} />
      ))}
    </Main>
  );
};

export default PharmacyResult;
