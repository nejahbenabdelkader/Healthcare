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
  Description,
  ButtonsWrapper,
} from "./DataElemnts";
import Rating from "@mui/material/Rating";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import profilePicture from "../../../../images/profilePicture.jpg"
import { Avatar } from "@mui/material";
const ProfileDoctor = ({fullName,firm,imageURL,description,phoneNumber}) => {
  const LoggedUser = useSelector((state) => state.user.type);
  const navigate=useHistory();
  const handleClickSendMessage=()=> {
    if(LoggedUser=='') navigate.push('/signin')
}
  return (
    <Main>
      <FlexWrapperOne>
      <Avatar sx={{width:75,height:75,borderRadius:1,margin:1}}  src={profilePicture} />
        <TextWrap>
          <Title>{fullName}</Title>
          <Description>
            {description}
          </Description>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly sx={{ml:1.5}}/>
        </TextWrap>
      </FlexWrapperOne>
      <FlexWrapperOne>
        <IconStyle color="#fff">
          <BiMap height={25} width={25} />
        </IconStyle>
        <Location>{firm.address}</Location>
        <ButtonsWrapper>
          <Call
            backgroundColor="#01bf71"
            onClick={() => console.log("working")}
            width="250px"
          >
            <IconStyle>
              <BsFillTelephoneFill height={25} width={25} />
            </IconStyle>
            <MakeACall>+216 {phoneNumber}</MakeACall>
          </Call>
          <Call backgroundColor="#01bf71" width="250px" onClick={handleClickSendMessage}>
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
