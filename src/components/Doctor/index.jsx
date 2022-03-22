import React from "react";
import { FlexWrapperOne } from "./Data/DataElemnts";
import ProfileDoctor from "./Data/Profile";
import DatePicker from "./DatePicker";
import { FlexWrapper } from "./DoctorElements";
import Maps from "./maps";

const Doctor = () => {
  return (
    <>
    <FlexWrapper>
      <ProfileDoctor />
    </FlexWrapper>
      
      <FlexWrapper>
        <DatePicker />
       <Maps />
      </FlexWrapper>
    </>
  );
};

export default Doctor;
