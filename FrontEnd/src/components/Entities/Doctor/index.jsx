import React from "react";
import ProfileDoctor from "./Data/Profile";
import DatePicker from "./DatePicker";
import { FlexWrapper } from "./DoctorElements";
import Maps from "./maps";
const Doctor = ({ doctorInfo }) => {
  const location= {
    lat: parseFloat(doctorInfo.firm.cordinate.split(",")[0]),
    lng: parseFloat(doctorInfo.firm.cordinate.split(",")[1])
  }
  return (
    <>
      <FlexWrapper>
        <ProfileDoctor {...doctorInfo} />
      </FlexWrapper>
      <FlexWrapper>
        <DatePicker doctorData={doctorInfo}/>
        <Maps position={location}/>
      </FlexWrapper>
    </>
  );
};

export default Doctor;
