import React, { useState } from "react";
import Consulting from "../components/Consulting";
import Appointments from "../components/Entities/Patient/Appoitment/Appointments";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import TimeTable from "../components/Entities/Doctor/TimeTable";
import { FlexWrapperOne } from "../components/Entities/Doctor/Data/DataElemnts";
import Loading from "./Loading";
import PatientCard from "../components/Entities/Patient/PatientCard";
const navLinks = {
    rightButtonName:"LogOut" ,
    rightButtonPath:"/",
  navBarLink: ["Appoitment", "Consulting", "Messages", "Account"],
};
const DoctorHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...navLinks} />
      <Navbar toggle={toggle} {...navLinks} />
      <Hero />
      <FlexWrapperOne>
        <TimeTable /> <PatientCard />
      </FlexWrapperOne>
      <Services />
      <Footer />
    </>
  );
};

export default DoctorHome;
