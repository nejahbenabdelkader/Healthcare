import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  FormPharmacy,
  FormInput,
  FormLabel,
  IconStyle,
  Table,
  FormLabel1,
  FormLabel2,
  FormSelect,
  FormOption,
  FormLabel3,
  FormButtonSave,
  FormH1
} from "./AccountElements";

import { BsGenderAmbiguous,BsFillTelephoneFill} from "react-icons/bs";
import {SiBandsintown} from "react-icons/si";
import {BiMap} from "react-icons/bi";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Towns } from "../Info/Data";

const AccountPharmacy = (props) => {
  const [gender, setGender] = useState("Male");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  return (
    
      <FormWrap>
        <FormContent>
          <FormPharmacy action="#">
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
                  <FormInput
                    htmlFor="pharmacyname"
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
              <td>
                <FormButtonSave type="submit">Save</FormButtonSave>
              </td>
              </tr>
            </Table>
          </FormPharmacy>
        </FormContent>
      </FormWrap>
    
  );
};

export default AccountPharmacy;
