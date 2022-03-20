import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
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
} from "./SignupElements";

import { BsGenderAmbiguous } from "react-icons/bs";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const specialities = [
  {
    value: "generaliste",
    label: "Généraliste",
  },
  {
    value: "EUR",
    label: "Nutritioniste",
  },
  {
    value: "BTC",
    label: "Densite",
  },
  {
    value: "JPY",
    label: "Cardiologue",
  },
  {
    value: "JPY",
    label: "Dermatologue",
  },
  {
    value: "JPY",
    label: "Pédiatre",
  },
];

const SignUpPatient = (props) => {
  const [gender, setGender] = useState("Male");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Mydoctor</Icon>
        <FormContent>
          <Form action="#">
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
                    First Name
                  </FormLabel>
                </td>
                <td>
                  <FormLabel htmlFor="for">
                    <IconStyle>
                      <FaUser />
                    </IconStyle>
                    Last Name
                  </FormLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    htmlFor="firstname"
                    placeholder="Enter your first name"
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="lastname"
                    placeholder="Enter your last name"
                    required
                  ></FormInput>
                </td>
              </tr>
              <tr>
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
              </tr>
              <tr>
                <td>
                  <FormInput
                    htmlFor="email"
                    placeholder="Enter your email"
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
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpPatient;
