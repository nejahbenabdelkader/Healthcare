import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import DoctorRow from "./DoctorRow";

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
        town: "Tunis Le Bardo",
        cordinate: "36.8079199,10.1393102",
      },
      {
        address: "Avenue 20 Mars Le Bardo Médical 1er étage Bureau 1-1",
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

export default function DoctorsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden"}}>
      <TableContainer component={Paper} sx={{ maxHeight: 440}}> 
      <Table stickyHeader aria-label="sticky table">
        <TableHead sx={{bgcolor:"#01bf71"}}>
          <TableRow >
            <TableCell sx={{bgcolor:"#01bf71"}}/>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Full Name</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Phone Number</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Email</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Gender</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Speciality</TableCell>
            <TableCell sx={{color:"white",bgcolor:"#01bf71"}}>Date d'inscription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <DoctorRow key={row.name} row={row}/>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
