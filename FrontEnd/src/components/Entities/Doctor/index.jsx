import React from "react";
import ProfileDoctor from "./Data/Profile";
import DatePicker from "./DatePicker";
import { FlexWrapper } from "./DoctorElements";
import Maps from "./maps";
const Doctor = ({ doctorInfo }) => {
  return (
    <>
      <FlexWrapper>
        <ProfileDoctor {...doctorInfo} />
      </FlexWrapper>
      <FlexWrapper>
        <DatePicker />
        <Maps position={doctorInfo.location}/>
      </FlexWrapper>
    </>
  );
};

export default Doctor;
