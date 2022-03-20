import React, { useState } from "react";
import SignUpPatient from "./SignUpPatient";
import SignUpDoctor from "./SignUpDoctor";
import SignUpPharmacy from "./SignUpPharmacy";
//import {RadioGroup, Radio, FormControl, FormControlLabel} from "@mui/material";

const SignUp = () => {
  const [signUpType, setSignUpType] = useState("patient");
  const handleChangeSignUpType = (e) => {
    console.log(e.target.id);
    setSignUpType(e.target.id);
  };

  

  return (
    <>
      {signUpType === "patient" && (
          <SignUpPatient changeSignUpType={handleChangeSignUpType} />
      )}

      {signUpType === "doctor" && (
        <SignUpDoctor changeSignUpType={handleChangeSignUpType} SignUpType={signUpType}/>
      )}
      {signUpType === "pharmacy" && (
          <SignUpPharmacy changeSignUpType={handleChangeSignUpType} SignUpType={signUpType}/>
      )}
    </>
  );
};

export default SignUp;
