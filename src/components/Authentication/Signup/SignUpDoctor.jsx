import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormDoctor,
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
  FormLabel3,
  FormLabel4,
  ServicesIcon,
} from "./SignupElements";

import { BsGenderAmbiguous ,BsCardImage,BsFillTelephoneFill} from "react-icons/bs";
import {SiBandsintown} from "react-icons/si";
import {BiMap} from "react-icons/bi";
import {MdOutlineDescription} from "react-icons/md";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Icon1 from '../../../images/logo.jpg'
import { Towns } from "../../Info/Data";

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
        <Icon to="/" src={Icon1}><ServicesIcon src={Icon1}/></Icon>
        <FormContent>
          <FormDoctor action="#">
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
                  <FormLabel2 htmlFor="for">Speciality</FormLabel2>
                </td>
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
                    <IconStyle>
                      <BsCardImage/>
                    </IconStyle>
                    Profile Picture
                  </FormLabel3>
                </td>
              </tr>
              <tr>
                <td>
                  <FormSelect htmlFor="speciality" required>
                    {specialities.map((speciality) => (
                      <FormOption value={speciality.value}>
                        {speciality.label}
                      </FormOption>
                    ))}
                  </FormSelect>
                </td>
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
                  {/* upload image */}
                </td>
              </tr>
              <tr>
              <td>
                  <FormLabel2 htmlFor="for">Firm Name</FormLabel2>
                </td>
                <td>
                  <FormLabel2 htmlFor="for">
                  <IconStyle>
                      <BiMap/>
                    </IconStyle>
                    Address</FormLabel2>
                </td>
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
                    htmlFor="firmname"
                    placeholder="Enter your firm name"
                    required
              ></FormInput>
              </td>
              <td>
              <FormInput
                    htmlFor="address"
                    placeholder="Enter your firm address"
                    required
              ></FormInput>
              </td>
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
              <tr>
              <FormLabel4 htmlFor="for">
                    <IconStyle>
                      <MdOutlineDescription/>
                    </IconStyle>
                    Description
                  </FormLabel4>
               </tr> 
               <tr>
                 <td colSpan="4">
                  <TextField
                    sx={{ bgcolor: "#FFFFFF", mx: 1, borderRadius: 1, marginBottom:3,width:950}}
                    placeholder="Write A Little Description About You"
                    multiline
                    rows={2}
                    maxRows={4}
                  />
                </td> 
              </tr>
            </Table>
            <FormButtonCreate type="submit">Create Account</FormButtonCreate>
          </FormDoctor>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpDoctor;
