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
import AdminService from "../../../service/AdminService";
export default function DoctorsTable() {
  const [doctorsData,setDoctorsData]=React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  React.useEffect(()=> {
      const fetchData=async ()=> {
        const response = await new AdminService().getAllDoctors();
        setDoctorsData(response.data);
      }
      fetchData()
  }  
  ,[])
  
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
          {doctorsData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <DoctorRow key={row.id} row={row}/>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 20, 50]}
        component="div"
        count={doctorsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
