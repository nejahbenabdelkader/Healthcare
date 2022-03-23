import React from "react";
import { Detail, DrugInfoCmp, Header, Info, Name, Photo, Title } from "./DrugInfoElements.jsx";
const DrugInfo = ({}) => {
  return (
    <DrugInfoCmp>
      <Header>
        <Photo />
        <Name>paracetamol15mgForMen</Name>
      </Header>
      <Info>
        <Title>Reference :</Title>
        <Detail>mgf125d</Detail>
      </Info>
      <Info>
        <Title>Form :</Title>
        <Detail>mgf125ds87ff54</Detail>
      </Info>
      <Info>
        <Title>Dosage :</Title>
        <Detail>mgf125ds87ff54</Detail>
      </Info>
      <Info>
        <Title>Reference :</Title>
        <Detail>mgf125ds87ff54</Detail>
      </Info>
    </DrugInfoCmp>
  );
};
export default DrugInfo;
