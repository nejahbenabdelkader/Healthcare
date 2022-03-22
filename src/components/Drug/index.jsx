import React from "react";
import { ButtonsWrapper, Call, MakeACall, TextWrap, Title } from "../Doctor/Data/DataElemnts";
import { ServicesH2 } from "../Services/ServiceElements";
import { FlexWrapper, ImgWrap, Main, MoreButton } from "./DrugElements";

const DataDrug = () => {
  return (
    <Main>
      <FlexWrapper>
        <ImgWrap
          img
          src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
        />
        <TextWrap>
          <Title>Pharmacy hedi jouini</Title>
          <ServicesH2>
            Spécialiste en Chirurgie Orthopédique Chirurgie du Rachis chirurgie
            prothétique Ancien Assistant à la Faculté de Médecine de Tunis
            Diplômé de la Faculté de Médecine de Paris
          </ServicesH2>
        </TextWrap>
          <MoreButton backgroundColor="#01bf71;">
            <MakeACall>More</MakeACall>
          </MoreButton>
      </FlexWrapper>
    </Main>
  );
};

export default DataDrug;
