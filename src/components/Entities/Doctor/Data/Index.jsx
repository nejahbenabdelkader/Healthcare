import React from "react";
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
  Description,
} from "./DataElemnts";
import { BiMap } from "react-icons/bi";
const DataDoctor = ({doctorName,streetAdress,photo,description,handleAppoitmentClick}) => {
  return (
    <Main>
      <FlexWrapperOne>
        <ImgWrap
          img
          src={photo}
        />
        <TextWrap>
          <Title>{doctorName}</Title>
          <Description>
            {description}
          </Description>
        </TextWrap>
        <Call backgroundColor="#01bf71;"  onClick={handleAppoitmentClick}>
            <MakeACall>Take An Appoitment</MakeACall>
          </Call>
      </FlexWrapperOne>
      <FlexWrapperOne>
        <IconStyle color="#fff">
          <BiMap height={25} width={25} />
        </IconStyle>
        <Location>{streetAdress}</Location>
         
      </FlexWrapperOne>
    </Main>
  );
};

export default DataDoctor;
