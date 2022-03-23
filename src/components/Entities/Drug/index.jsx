import React from "react";
import { MakeACall, TextWrap } from "../Doctor/Data/DataElemnts";
import { FlexWrapper, ImgWrap, Main, MoreButton, Title, Utilisation } from "./DrugElements";

const DataDrug = ({nameDrug,utilisation,photo,handleAppoitmentClick}) => {
  return (
    <Main>
      <FlexWrapper>
        <ImgWrap
          img
          src={photo}
        />
        <TextWrap>
          <Title>{nameDrug}</Title>
          <Utilisation>
            {utilisation}
          </Utilisation>
        </TextWrap>
          <MoreButton backgroundColor="#01bf71;" onClick={handleAppoitmentClick}>
            <MakeACall>More</MakeACall>
          </MoreButton>
      </FlexWrapper>
    </Main>
  );
};

export default DataDrug;
