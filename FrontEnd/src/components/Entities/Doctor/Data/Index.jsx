import React from "react";
import lodash from "lodash";
import profilePicture from "../../../../images/profilePicture.jpg"
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
import { Avatar } from "@mui/material";
const DataDoctor = ({
  id,
  fullName,
  firm,
  photo,
  description,
  handleAppoitmentClick,
}) => {
  return (
    <Main>
      <FlexWrapperOne>
          <Avatar sx={{width:75,height:75,borderRadius:1,margin:1}}  src={profilePicture} />
        <TextWrap>
          <Title>{lodash.startCase(fullName)}</Title>
          <Description>{description}</Description>
        </TextWrap>
        <Call
          backgroundColor="#01bf71;"
          width="400px"
          onClick={handleAppoitmentClick}
        >
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
