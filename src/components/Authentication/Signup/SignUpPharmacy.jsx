import React, { useState } from "react";
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
import Icon1 from '../../../images/logo.jpg'
import { SiBandsintown } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import { BsGenderAmbiguous ,BsFillTelephoneFill } from "react-icons/bs";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Towns } from "../../Info/Data";

const SignUpPharmacy = (props) => {
    const [gender, setGender] = useState("Male");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
    return (
    <Container>
      <FormWrap>
      <Icon to="/" src={Icon1}><ServicesIcon src={Icon1}/></Icon>       
       <FormContent>
          <FormPharmacy action="#">
          <FormControl sx={{ mx: 5, color: "#6495ED" }}>
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
                  value="Pharmacist"
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
                  label="Pharmacist"
                />
              </RadioGroup>
            </FormControl>
            <FormH1>
              Welcome to our website Pharmacist .Please enter your personal information
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
                    htmlFor="fullname"
                    placeholder="Enter your full name"
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
                <td>
                  <FormInput
                    htmlFor="password"
                    placeholder="Enter your password"
                    required
                  ></FormInput>
                </td>
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
                      <SiBandsintown/>
                    </IconStyle>
                    Town</FormLabel2>
                </td>
                <td>
                  <FormLabel3 htmlFor="for">
                    Pharmacy Name
                  </FormLabel3>
                </td>
                <td>
                  <FormLabel2 htmlFor="for">
                    <IconStyle>
                      <BiMap/>
                    </IconStyle>
                    Address
                  </FormLabel2>
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
                  <FormSelect htmlFor="town" required>
                    {Towns.map((option) => (
                      <FormOption value={option}>{option}</FormOption>
                    ))}
                  </FormSelect>
                </td>
                <td>
                  <FormInput
                    htmlFor="pharmacyname"
                    placeholder="Enter your pharmacy name"
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="address"
                    placeholder="Enter your address"
                    required
                  ></FormInput>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel htmlFor="for">X Cordiante</FormLabel>
                </td>
                <td>
                  <FormLabel htmlFor="for">Y Cordinate</FormLabel>
                </td>
              </tr>
              <tr>
              <td>
              <FormInput
                    htmlFor="x_cordinate"
                    placeholder="Enter your firm x cordinate"
                    required
              ></FormInput>
              </td>
              <td>
              <FormInput
                    htmlFor="y_cordinate"
                    placeholder="Enter your firm y cordinate"
                    required
              ></FormInput>
              </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit">Create Account</FormButtonCreate>
          </FormPharmacy>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpPharmacy;
