import { Typography } from "@mui/material";
import React from "react";
import { ServicesH2 } from "../../Services/ServiceElements";
import {
  Main,
  Call,
  FlexWrapperOne,
  Location,
  MakeACall,
  Title,
  ImgWrap,
  TextWrap,
  IconStyle,
  ButtonsWrapper,
} from "./DataElemnts";
import { BiMap } from "react-icons/bi";

const DataDoctor = () => {
  return (
    <Main>
      <FlexWrapperOne>
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
      </FlexWrapperOne>
      <FlexWrapperOne>
        <IconStyle color="#fff">
          <BiMap height={25} width={25} />
        </IconStyle>
        <Location>CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE</Location>
        <ButtonsWrapper>
          <Call backgroundColor="#01bf71;">
            <MakeACall>Take An Appoitment</MakeACall>
          </Call>
        </ButtonsWrapper>
      </FlexWrapperOne>
    </Main>
  );
};

export default DataDoctor;
