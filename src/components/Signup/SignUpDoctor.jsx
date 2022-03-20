import React, { useState } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

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
} from "./SignupElements";

import { BsGenderAmbiguous } from "react-icons/bs";
import {
  Button,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Towns } from "../Info/Data";

const SignUpDoctor = (props) => {
  const [gender, setGender] = useState("Male");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
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
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Mydoctor</Icon>
        <FormContent>
          <Form action="#">
            <FormControl sx={{ mx: 17, color: "#eceff1" }}>
              <RadioGroup
                row
                onChange={props.changeSignUpType}
                value={props.SignUpType}
              >
                <FormControlLabel
                  value="Doctor"
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
                  value="Pharmacy"
                  control={
                    <Radio
                      id="pharmacy"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 35,
                          color: "#eceff1",
                        },
                      }}
                    />
                  }
                  label="Pharmacy"
                />
              </RadioGroup>
            </FormControl>
            <FormH1>
              Welcome to our website Doctor.Please enter your personal
              information carefully!
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
                <td>
                  <FormLabel htmlFor="for">Speciality</FormLabel>
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
                <td>
                  <FormSelect htmlFor="speciality" required>
                    {specialities.map((speciality) => (
                      <FormOption value={speciality.value}>
                        {speciality.label}
                      </FormOption>
                    ))}
                  </FormSelect>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel2 htmlFor="for">
                    <IconStyle>
                      <BsFillTelephoneOutboundFill />
                    </IconStyle>
                    Phone Number
                  </FormLabel2>
                </td>
                <td>
                  <FormLabel htmlFor="for">Town</FormLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <FormInput
                    htmlFor="firstname"
                    placeholder="Enter your phone Number"
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormSelect htmlFor="speciality" required>
                    {Towns.map((option) => (
                      <FormOption value={option}>{option}</FormOption>
                    ))}
                  </FormSelect>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <TextField
                    sx={{ bgcolor: "#FFFFFF", mx: 1, borderRadius: 1 }}
                    placeholder="Write A Little Description About You"
                    multiline
                    rows={3}
                    maxRows={4}
                    fullWidth
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      hidden
                    />
                    <Button variant="contained" component="span">
                      Upload A Photo
                    </Button>
                  </label>
                </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit">Create Account</FormButtonCreate>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpDoctor;
