import React, { useReducer, useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormPharmacy,
  FormInput,
  FormH1,
  FormLabel,
  IconStyle,
  Table,
  FormButtonCreate,
  FormLabel1,
  FormLabel2,
  FormLabel3,
  FormSelect,
  FormOption,
  ServicesIcon,
} from "./SignupElements";
import Icon1 from "../../../images/logo.jpg";
import { SiBandsintown } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import { BsGenderAmbiguous, BsFillTelephoneFill } from "react-icons/bs";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Towns } from "../../Info/Data";
import { NavbarContainer } from "../Signin/SigninElements";

const SignUpPharmacy = (props) => {
  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "Male",
    town: "Tunis",
    pharmacyName: "",
    x_cordinate: "",
    y_cordinate: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE INPUT":
        return { ...state, [action.label]: action.value };
    }
  };
  const [pharmacy, dispatchActionPharmacy] = useReducer(reducer, initialState);
  const sendData = () => {
    console.log(pharmacy);
  };
  return (
    <Container>
      <FormWrap>
        <Box sx={{ width: "100%", backgroundColor: "black" }}>
          <NavbarContainer>
            <Icon to="/" src={Icon1}>
              <ServicesIcon src={Icon1} />
            </Icon>
          </NavbarContainer>
        </Box>

        <FormContent>
          <FormPharmacy action="#">
            <FormControl sx={{ mx: 5, color: "#6495ED" }}>
              <RadioGroup
                row
                onChange={props.changeSignUpType}
                value={props.SignUpType}
              >
                <FormControlLabel
                  value="doctor"
                  label="Doctor"
                  control={
                    <Radio
                      id="doctor"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 35,
                          color: "#eceff1",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="pharmacist"
                  label="Pharmacist"
                  control={
                    <Radio
                      id="pharmacist"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 35,
                          color: "#eceff1",
                        },
                      }}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
            <FormH1>
              Welcome to our website Pharmacist .Please enter your personal
              information carefully!
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
                <td>
                  <FormLabel htmlFor="for">
                    <IconStyle>
                      <FaLock />
                    </IconStyle>
                    Password
                  </FormLabel>
                </td>
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
                  <FormInput
                    id="fullName"
                    placeholder="Enter your full name"
                    value={pharmacy.fullName}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={pharmacy.email}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={pharmacy.password}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormSelect
                    id="gender"
                    value={pharmacy.gender}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  >
                    <FormOption value="male">Male</FormOption>
                    <FormOption value="female">Female</FormOption>
                  </FormSelect>
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
                  <FormLabel2 htmlFor="for">
                    <IconStyle>
                      <SiBandsintown />
                    </IconStyle>
                    Town
                  </FormLabel2>
                </td>
                <td>
                  <FormLabel3 htmlFor="for">Pharmacy Name</FormLabel3>
                </td>
                <td>
                  <FormLabel2 htmlFor="for">
                    <IconStyle>
                      <BiMap />
                    </IconStyle>
                    Address
                  </FormLabel2>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={pharmacy.phoneNumber}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormSelect
                    id="town"
                    value={pharmacy.town}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  >
                    {Towns.map((option) => (
                      <FormOption value={option}>{option}</FormOption>
                    ))}
                  </FormSelect>
                </td>
                <td>
                  <FormInput
                    id="pharmacyName"
                    placeholder="Enter your pharmacy name"
                    value={pharmacy.pharmacyName}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    id="address"
                    placeholder="Enter your address"
                    value={pharmacy.address}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel>X Cordiante</FormLabel>
                </td>
                <td>
                  <FormLabel>Y Cordinate</FormLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    id="x_cordinate"
                    placeholder="Enter your firm x cordinate"
                    value={pharmacy.x_cordinate}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    id="y_cordinate"
                    placeholder="Enter your firm y cordinate"
                    value={pharmacy.y_cordinate}
                    onChange={(e) => {
                      dispatchActionPharmacy({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  ></FormInput>
                </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit" onClick={sendData} to="/">
              Create Account
            </FormButtonCreate>
          </FormPharmacy>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpPharmacy;
