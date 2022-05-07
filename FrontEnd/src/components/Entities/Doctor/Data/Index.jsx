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
const DataDoctor = ({id,fullName,firm,photo,description,handleAppoitmentClick}) => {
  return (
    
    <Main>
      <FlexWrapperOne>
        <ImgWrap
          img
          src={photo}
        />
        <TextWrap>
          <Title>{fullName}</Title>
          <Description>
            {description}
          </Description>
        </TextWrap>
        <Call backgroundColor="#01bf71;" width="400px" onClick={handleAppoitmentClick} >
            <MakeACall id={id}>Take An Appoitment</MakeACall>
          </Call>
      </FlexWrapperOne>
      <FlexWrapperOne>
        <IconStyle color="#fff">
          <BiMap height={25} width={25} />
        </IconStyle>
        <Location>{firm.address}</Location>
         
      </FlexWrapperOne>
    </Main>
  );
};

export default DataDoctor;
