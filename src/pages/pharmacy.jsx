import React, { useState } from "react";
import Consulting from "../components/Consulting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import TimeTable from "../components/Entities/Doctor/TimeTable";
import { FlexWrapperOne } from "../components/Entities/Doctor/Data/DataElemnts";
import Loading from "./Loading";
import Info from "../components/Info";
const navLinks = {
    rightButtonName:"LogOut" ,
    rightButtonPath:"/",
  navBarLink: ["Appoitment", "Consulting", "Messages", "Account"],
};
const PharmacyHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
};

export default PharmacyHome;
