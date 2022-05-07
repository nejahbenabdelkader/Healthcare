import React, { useReducer, useState } from "react";
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

import {
  BsGenderAmbiguous,
  BsCardImage,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { SiBandsintown } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Icon1 from "../../../images/logo.jpg";
import AlertComponent from "../../Elements/Alert";
import { NavbarContainer } from "../Signin/SigninElements";
import { useSelector } from "react-redux";
import { Towns } from "../../Info/Data";
import { PhotoCamera } from "@mui/icons-material";
import { UserService } from "../../../service/UserService";
const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
  gender: "m",
  speciality: "",
  town: "TUNIS",
  profilePicure: null,
  firmName: "",
  description: "",
  address: "",
  role: "DOCTOR",
  firm: "",
};

const SignUpDoctor = (props) => {
  const [verifiedCredentials, setVerifiedCredentials] = useState(true);
  const specialities = useSelector((state) => state.specialities);
  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE INPUT":
        return { ...state, [action.label]: action.value };
    }
  };
  const [doctor, dispatchActionDoctor] = useReducer(reducer, initialState);
  const sendData = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((data) => {
      const positionUser = {
        lat: data.coords.latitude,
        lon: data.coords.longitude,
      };
      const firm = {
        firmName: doctor.firmName,
        town: doctor.town,
        cordinate: positionUser.lat + "," + positionUser.lon,
        address: doctor.address,
      };
      doctor.firm=firm;
      console.log(doctor)
      new UserService().addUser(doctor).then((response) => console.log(response));
    });
  };
  return (
    <Container>
      <AlertComponent
        verified={verifiedCredentials}
        setVerified={setVerifiedCredentials}
        message="SomeThing Went Wrong"
      />

      <Box sx={{ width: "100%", backgroundColor: "black" }}>
        <NavbarContainer>
          <ServicesIcon to="/" src={Icon1} />
        </NavbarContainer>
      </Box>
      <FormWrap>
        <FormContent>
          <FormDoctor>
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
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                    value={doctor.fullName}
                    onChange={(e) => {
                      dispatchActionDoctor({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                  ></FormInput>
                </td>
                <td>
                  <FormInput
                    id="email"
                    placeholder="Enter your email"
                    value={doctor.email}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                    value={doctor.password}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                    value={doctor.gender}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                      <SiBandsintown />
                    </IconStyle>
                    Town
                  </FormLabel2>
                </td>
                <td>
                  <FormLabel3 htmlFor="for">
                    <IconStyle>
                      <BsCardImage />
                    </IconStyle>
                    Profile Picture
                  </FormLabel3>
                </td>
              </tr>
              <tr>
                <td>
                  <FormSelect
                    id="speciality"
                    value={doctor.speciality}
                    onChange={(e) => {
                      dispatchActionDoctor({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    required
                  >
                    {specialities.map((speciality) => (
                      <FormOption value={speciality} style={{ mt: "10px" }}>
                        {speciality}
                      </FormOption>
                    ))}
                  </FormSelect>
                </td>
                <td>
                  <FormInput
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={doctor.phoneNumber}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                    value={doctor.town}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                    <label htmlFor="icon-button-file">
                      <Input
                        onChange={(e) => {
                          dispatchActionDoctor({
                            type: "HANDLE INPUT",
                            label: e.target.id,
                            value: e.target.files[0],
                          });
                        }}
                        accept="image/*"
                        id="profilePicture"
                        type="file"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                </td>
              </tr>
              <tr>
                <td>
                  <FormLabel2 htmlFor="for">Firm Name</FormLabel2>
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
                    id="firmName"
                    placeholder="Enter your firm name"
                    value={doctor.firmName}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                    placeholder="Enter your firm address"
                    value={doctor.address}
                    onChange={(e) => {
                      dispatchActionDoctor({
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
                <FormLabel4 htmlFor="for">
                  <IconStyle>
                    <MdOutlineDescription />
                  </IconStyle>
                  Description
                </FormLabel4>
              </tr>
              <tr>
                <td colSpan="4">
                  <TextField
                    sx={{
                      bgcolor: "#FFFFFF",
                      mx: 1,
                      borderRadius: 1,
                      marginBottom: 3,
                      width: 950,
                    }}
                    placeholder="Write A Little Description About You"
                    id="description"
                    value={doctor.description}
                    onChange={(e) => {
                      dispatchActionDoctor({
                        type: "HANDLE INPUT",
                        label: e.target.id,
                        value: e.target.value,
                      });
                    }}
                    multiline
                    rows={2}
                    maxRows={4}
                  />
                </td>
              </tr>
            </Table>
            <FormButtonCreate type="submit" onClick={sendData} to="/">
              Create Account
            </FormButtonCreate>
          </FormDoctor>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUpDoctor;
