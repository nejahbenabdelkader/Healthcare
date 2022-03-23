import React from "react";
import styled from "styled-components"
import PharmacyResult from "../../Pharmacy/Profile";
import DrugInfo from "./DrugInfo";
import Publicity from "./Publicity";
const  GridWrapper=styled.div`
display:grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr 1fr;
`
const Drug = ({}) => {
  return (
    <GridWrapper>
      <DrugInfo />
      <PharmacyResult />
      <Publicity />
    </GridWrapper>
  );
};
export default Drug;