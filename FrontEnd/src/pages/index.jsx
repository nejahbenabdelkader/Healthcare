import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Consulting from "../components/Consulting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import { UserService } from "../service/UserService";
import { userActions } from "../Store/User";
import AdminPage from "./admin";
import DoctorHome from "./doctor";
import PatientHome from "./patient";
import PharmacyHome from "./pharmacy";
const navLinks = {
  rightButtonName: "SignIn",
  rightButtonPath: "/signin",
  navBarLink: ["About", "Consulting", "Services", "SignUp"],
};
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const LoggedUser = useSelector((state) => state.user.loggedUser);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  switch (LoggedUser.role) {
    case "[PATIENT]":
      return <PatientHome />
    case "[DOCTOR]":
      return <DoctorHome />;
    case "[PHARMACY]":
      return <PharmacyHome />
    case "[ADMIN]":
      return <AdminPage />  
    default:
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} {...navLinks} />
          <Navbar toggle={toggle} {...navLinks} />
          <Hero />
          <Info {...homeObjOne} id="about" />
          <Consulting {...homeObjTwo} />
          <Services />
          <Info {...homeObjThree}  id="signup"/>
          <Footer />
        </>
      );
  }
};

export default Home;
