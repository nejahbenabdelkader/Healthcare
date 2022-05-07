import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PharmacyRow from "./PharmacyRow";

function createData(
  fullName,
  phoneNumber,
  email,
  gender,
  speciality,
  dateInscrit
) {
  return {
    fullName,
    phoneNumber,
    email,
    gender,
    speciality,
    dateInscrit,
    firm: [
      {
        address: "Avenue 20 Mars Le Bardo Médical 1er étage Bureau 1-1",
        firmName: "Pharmacie ACHOUR TAOUFIK",
        type: "JOUR",
        town: "Tunis Le Bardo",
        cordinate: "36.8079199,10.1393102",
      },
      {
        address: "Avenue 20 Mars Le Bardo Médical 1er étage Bureau 1-1",
        firmName: "Pharmacie ACHOUR TAOUFIK",
        type: "JOUR",
        town: "Tunis Le Bardo",
        cordinate: "36.8079199,10.1393102",
      },
      {
        address: "Avenue 20 Mars Le Bardo Médical 1er étage Bureau 1-1",
        firmName: "Pharmacie ACHOUR TAOUFIK",
        type: "JOUR",
        town: "Tunis Le Bardo",
        cordinate: "36.8079199,10.1393102",
      },
      
    ],
  };
}



const rows = [
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
  createData(
    "kaoutherElJeri",
    71586971,
    "kaoutherElJeri@gmail.com",
    "m",
    "GASTRO-HEPATHOLOGIE",
    "2020-01-05"
  ),
];

export default function PharmacyTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}/>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Full Name</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Phone Number</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Email</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Gender</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Date d'inscription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <PharmacyRow key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
