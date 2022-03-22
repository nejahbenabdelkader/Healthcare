import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  FormDoctor,
  FormInput,
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
  FormH1
} from "./AccountElements";

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
import { Towns } from "../Info/Data";

const Account = (props) => {
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
    
      <FormWrap>
        <FormContent>
          <FormDoctor action="#">
            <FormH1>Manage Account</FormH1>
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
                    placeholder=""
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="email"
                    placeholder=""
                    required
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    htmlFor="password"
                    placeholder=""
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
                    placeholder=""
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
                    placeholder=""
                    required
              ></FormInput>
              </td>
              <td>
              <FormInput
                    htmlFor="address"
                    placeholder=""
                    required
              ></FormInput>
              </td>
              <td>
              <FormInput
                    htmlFor="x_cordinate"
                    placeholder=""
                    required
              ></FormInput>
              </td>
              <td>
              <FormInput
                    htmlFor="y_cordinate"
                    placeholder=""
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
                 <td colSpan="3">
                  <TextField
                    sx={{ bgcolor: "#FFFFFF", mx: 1, borderRadius: 1,width:900}}
                    placeholder=""
                    multiline
                    rows={2}
                    maxRows={4}
                  />
                </td> 
                <td>
                    <FormButtonCreate type="submit">Save</FormButtonCreate>
                </td>
              </tr>
            </Table>
          </FormDoctor>
        </FormContent>
      </FormWrap>
    
  );
};

export default Account;
