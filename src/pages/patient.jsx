import React, { useState } from "react";
import Chat from "../components/Chat";
import Consulting from "../components/Consulting";
import AccountPatient from "../components/Entities/Patient/Account";
import Appointments from "../components/Entities/Patient/Appoitment/Appointments";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
const navLinks = {
    rightButtonName:"LogOut" ,
    rightButtonPath:"/",
  navBarLink: ["Appoitment", "Consulting", "Messages", "Account"],
};
const PatientHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...navLinks} />
      <Navbar toggle={toggle} {...navLinks} />
      <Hero />
     
      <Appointments /> <Chat />
      <Consulting {...homeObjTwo} />
      <Services />
      <AccountPatient />
      <Footer />
    </>
  );
};

export default PatientHome;
