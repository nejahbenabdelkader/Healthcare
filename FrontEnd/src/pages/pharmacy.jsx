import React, { useState } from "react";
import Consulting from "../components/Consulting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import Info from "../components/Info";
import ListMedications from "../components/Entities/Drug/DrugList/ListMedications";
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
    <ListMedications />
    <Services />
    <Info {...homeObjThree} />
    <Footer />
  </>
  );
};

export default PharmacyHome;
