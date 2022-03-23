import React, { useState } from "react";
import Consulting from "../components/Consulting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
const navLinks = {
  rightButtonName:"SignIn" ,
  rightButtonPath:"/signin",
  navBarLink: ["About", "Consulting", "Services", "SignUp"],
};

const Home = () => {
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

export default Home;
