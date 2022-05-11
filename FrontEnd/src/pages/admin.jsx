import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Consulting from "../components/Consulting";
import Dashboard from "../components/Dashboard";
import ValidationTable from "../components/Dashboard/ValidationTable";
import UsersTable from "../components/Entities/Admin/usersTable";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
const navLinks = {
  rightButtonName: "SignIn",
  rightButtonPath: "/signin",
  navBarLink: ["About", "Consulting", "Services", "SignUp"],
};

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const LoggedUser = useSelector((state) => state.user.loggedUser);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box sx={{bgcolor:"black"}}>
      <Navbar toggle={toggle} {...navLinks} />
      <Dashboard />
      <UsersTable />
      <ValidationTable />
      <Footer />
    </Box>
  );
};

export default AdminPage;
