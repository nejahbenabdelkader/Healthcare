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
import Swal from "sweetalert2";
import { UserService } from "../../../service/UserService";

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
    
    new UserService().authenticate(user.email, user.password).then((response) => {
      if (response.status=="401") {
        e.preventDefault();
        Swal.fire({
          title: "Error!",
          text: "Please verify Your Credentials !",
          icon: "error",
          confirmButtonText: "Return",
        });
      } else {
        dispatch(userActions.setLoggedUser(response.data));
        dispatch(userActions.setIsLogged(true));
        new UserService().getUserWithEmail(response.data.user).then(response=> {
          dispatch(userActions.setUserData(response.data))
        })
  
      }
      
    });
  };
  return (
    <>
      <Container>
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
