import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AdminService from '../../../service/AdminService';

const columns = [
  { id: 'fullName', label: 'Full Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    minWidth: 170,
  },
  { id: 'gender', label: 'Gender', minWidth: 100 },
];



function createData(fullName, email, phoneNumber, gender) {
  return { fullName, email, phoneNumber, gender, };
}

const rows = [
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
  createData('kaoutherElJeri', 'kaoutherElJeri@gmail.com', 71586971, "M"),
 
];

export default function PatientTable() {
  const [patientsData,setPatientsData]=React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  React.useEffect(()=>{
        const fetchData=async()=> {
          const response=await new AdminService().getAllPatients();
          setPatientsData(response.data)
        }
        fetchData()
  },[])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{color:"white",bgcolor:"#01bf71"}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {patientsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={patientsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}