import React, { useState } from "react";
import Icon1 from '../../../images/logo.jpg';
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

import { BsGenderAmbiguous,BsFillTelephoneFill } from "react-icons/bs";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const SignUpPatient = (props) => {
  const [gender, setGender] = useState("Male");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <Container>
      <FormWrap>
      <Icon to="/" src={Icon1}><ServicesIcon src={Icon1}/></Icon>       
       <FormContent>
          <FormPatient action="#">
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
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="email"
                    placeholder="Enter your email"
                    required
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
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="password"
                    placeholder="Enter your password"
                    required
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
                    onChange={handleChangeGender}
                    value={gender}
                    required
                  >
                    <FormOption value="male">Male</FormOption>
                    <FormOption value="female">Female</FormOption>
                  </FormSelect>
                </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit">Create Account</FormButtonCreate>
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
