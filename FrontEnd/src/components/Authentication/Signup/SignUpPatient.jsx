import React, { useReducer, useState } from "react";
import Icon1 from "../../../images/logo.jpg";
import { UserService } from "../../../service/UserService";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormPatient,
  FormInput,
  FormH1,
  FormLabel,
  IconStyle,
  Table,
  FormButtonCreate,
  FormLabel1,
  FormLabel2,
  FormSelect,
  FormOption,
  FormButtonSign,
  FormLabel3,
  ServicesIcon,
} from "./SignupElements";
import { BsGenderAmbiguous, BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Box } from "@mui/material";
import { NavbarContainer } from "../Signin/SigninElements";
import AlertComponent from "../../Elements/Alert";

const SignUpPatient = (props) => {
  
  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "m",
    role: "PATIENT"
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "fullName":
        return { ...state, fullName: action.value };
      case "email":
        return { ...state, email: action.value };
      case "phoneNumber":
        return { ...state, phoneNumber: action.value };
      case "password":
        return { ...state, password: action.value };
      case "gender":
        return { ...state, gender: action.value };
    }
  };
  
  const [patient, dispatchPatient] = useReducer(reducer, initialState);
  const [verifiedCredentials, setVerifiedCredentials] = useState(true);

  const sendData = (e) => {
    new UserService().addUser(patient).then(response => console.log(response))
    console.log(patient);
  };
  
  return (
    <Container>
      <FormWrap>
      <Box sx={{ width: "100%", backgroundColor: "black" }}>
        <NavbarContainer>
        <Icon to="/" src={Icon1}>
           <ServicesIcon to="/" src={Icon1} />
        </Icon>
        </NavbarContainer>
      </Box>
        <FormContent>
          <FormPatient>
            <FormH1>
              Welcome to our website.Please enter your personal information
              carefully!
            </FormH1>
            <Table>
              <tr>
                <td>
                  <FormLabel htmlFor="for">
                    <IconStyle>
                      <FaUser />
                    </IconStyle>
                    Full Name
                  </FormLabel>
                </td>
                <td>
                  <FormLabel1 htmlFor="for">
                    <IconStyle>
                      <FaEnvelope />
                    </IconStyle>
                    Email
                  </FormLabel1>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    htmlFor="fullname"
                    placeholder="Enter your first name"
                    required
                    onChange={(e) => {
                      dispatchPatient({ type: "fullName", value: e.target.value });
                    }}
                    value={patient.fullName}
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    onChange={(e) => {
                      dispatchPatient({ type: "email", value: e.target.value });
                    }}
                    value={patient.email}
                  ></FormInput>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel3 htmlFor="for">
                    <IconStyle>
                      <BsFillTelephoneFill />
                    </IconStyle>
                    Phone Number
                  </FormLabel3>
                </td>
                <td>
                  <FormLabel htmlFor="for">
                    <IconStyle>
                      <FaLock />
                    </IconStyle>
                    Password
                  </FormLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    htmlFor="phonenumber"
                    placeholder="Enter your phone number"
                    required
                    onChange={(e) => {
                      dispatchPatient({
                        type: "phoneNumber",
                        value: e.target.value,
                      });
                    }}
                    value={patient.phoneNumber}
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="password"
                    placeholder="Enter your password"
                    required
                    type="password"
                    onChange={(e) => {
                      dispatchPatient({
                        type: "password",
                        value: e.target.value,
                      });
                    }}
                    value={patient.password}
                  ></FormInput>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel2 htmlFor="for">
                    <IconStyle>
                      <BsGenderAmbiguous />
                    </IconStyle>
                    Gender
                  </FormLabel2>
                </td>
              </tr>
              <tr>
                <td>
                  <FormSelect
                    htmlFor="gender"
                    value={patient.gender}
                    required
                    onChange={(e) => {
                      dispatchPatient({
                        type: "gender",
                        value: e.target.value,
                      });
                    }}
                  >
                    <FormOption value="male">Male</FormOption>
                    <FormOption value="female">Female</FormOption>
                  </FormSelect>
                </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit" onClick={sendData}>
              Create Account
            </FormButtonCreate>
            <FormButtonSign onClick={props.changeSignUpType} id="doctor">
              Sign Up As Healthcare Professional
            </FormButtonSign>
          </FormPatient>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpPatient;
