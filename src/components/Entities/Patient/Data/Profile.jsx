import React from "react";
import { FlexWrapperOne } from "../../Doctor/Data/DataElemnts";
import { DateOfBirth, ImgWrap, Main, TextWrap, Title } from "./ProfileElements";

const PatientProfile = () => {
  return (
    <Main>
      <FlexWrapperOne>
        <ImgWrap />
        <TextWrap>
          <Title>Ahmed Mahmoud</Title>
          <DateOfBirth>11-01/1999</DateOfBirth>
        </TextWrap>
      </FlexWrapperOne>
    </Main>
  );
};

export default PatientProfile;
