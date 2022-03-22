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
  ButtonsWrapper,
  IconStyle,
} from "./DataElemnts";
import Rating from "@mui/material/Rating";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

const ProfileDoctor = () => {
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
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        </TextWrap>
      </FlexWrapperOne>
      <FlexWrapperOne>
        <IconStyle color="#fff">
          <BiMap height={25} width={25} />
        </IconStyle>
        <Location>CENTRE MEDICAL ECHIFAA, AVENUE HOUCINE BOUZAIENE</Location>
        <ButtonsWrapper>
          <Call
            backgroundColor="#01bf71"
            onClick={() => console.log("working")}
          >
            <IconStyle>
              <BsFillTelephoneFill height={25} width={25} />
            </IconStyle>
            <MakeACall>+21695846231</MakeACall>
          </Call>
          <Call backgroundColor="#01bf71">
            <IconStyle>
              <FiMail height={25} width={25} />
            </IconStyle>
            <MakeACall>Send A message</MakeACall>
          </Call>
        </ButtonsWrapper>
      </FlexWrapperOne>
    </Main>
  );
};

export default ProfileDoctor;
