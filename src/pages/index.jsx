import React, { useState } from "react";
import { useSelector } from "react-redux";
import Consulting from "../components/Consulting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
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
  const LoggedUser = useSelector((state) => state.user.type);
  console.log(LoggedUser);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  switch (LoggedUser) {
    case "patient":
      return <PatientHome />
    case "doctor":
      return <DoctorHome />;
    case "pharmacy":
      return <PharmacyHome />
    default:
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} {...navLinks} />
          <Navbar toggle={toggle} {...navLinks} />
          <Hero />
          <Info {...homeObjOne} />
          <Consulting {...homeObjTwo} />
          <Services />
          <Info {...homeObjThree} />
          <Footer />
        </>
      );
  }
};

export default Home;
