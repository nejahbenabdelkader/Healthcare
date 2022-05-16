import React from "react";
import PharmacyDetails from "./PharmacyData";
import { Main } from "./ProfileElements";

const PharmacyResult = ({pharmacyData}) => {
  return (
    <Main>
      {pharmacyData.map((pharmacy) => (
        <PharmacyDetails {...pharmacy} />
      ))}
    </Main>
  );
};

export default PharmacyResult;
