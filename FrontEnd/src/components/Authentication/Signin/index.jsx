import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  SignInBtnLink,
  NavbarContainer,
  ServicesIcon,
  IconStyle,
} from "./SigninElements";
import { FaEnvelope, FaLock, FaDirections } from "react-icons/fa";
import { userActions } from "../../../Store/User";
import Icon1 from "../../../images/logo.jpg";
import AlertComponent from "../../Elements/Alert";

const SignIn = () => {
  const dispatch = useDispatch();
  const [verifiedCredentials, setVerifiedCredentials] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const handleUserChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    id === "email" &&
      setUser((prevState) => {
        return { ...prevState, email: value };
      });
    id === "password" &&
      setUser((prevState) => {
        return { ...prevState, password: value };
      });
  };
  const CheckCredentials = (e) => {
    if (user.email === "patient" && user.password === "patient")
      dispatch(userActions.setLoggedUser({ type: "patient" }));
    else if (user.email === "doctor" && user.password === "doctor")
      dispatch(userActions.setLoggedUser({ type: "doctor" }));
    else if (user.email === "pharmacy" && user.password === "pharmacy")
      dispatch(userActions.setLoggedUser({ type: "pharmacy" }));
    else {
      setVerifiedCredentials(false);
      e.preventDefault();
    }
  };
  return (
    <>
      <Container>
        <AlertComponent
          verified={verifiedCredentials}
          setVerified={setVerifiedCredentials}
          message="SomeThing Went Wrong"
        />
        <FormWrap>
          <NavbarContainer>
            <Icon to="/" src={Icon1}>
              <ServicesIcon to="/" src={Icon1} />
            </Icon>
          </NavbarContainer>
          <FormContent>
            <Form action="#">
              <FormH1>Welcome back! Login to accees MyDoctor website</FormH1>
              <FormLabel htmlFor="for">
                <IconStyle>
                  <FaEnvelope />
                </IconStyle>
                Email
              </FormLabel>
              <FormInput
                htmlFor="email"
                placeholder="Enter your email"
                required
                value={user.email}
                onChange={handleUserChange}
                id="email"
              ></FormInput>
              <FormLabel htmlFor="for">
                <IconStyle>
                  <FaLock />
                </IconStyle>
                Password
              </FormLabel>
              <FormInput
                htmlFor="password"
                placeholder="Enter your password"
                required
                value={user.password}
                type="password"
                onChange={handleUserChange}
                id="password"
              ></FormInput>
              <SignInBtnLink type="submit" to="/" onClick={CheckCredentials}>
                <IconStyle>
                  <FaDirections />
                </IconStyle>
                Continue
              </SignInBtnLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
