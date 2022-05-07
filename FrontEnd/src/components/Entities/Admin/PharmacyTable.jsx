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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fullName}
        </TableCell>
        <TableCell align="right">{row.phoneNumber}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.speciality}</TableCell>
        <TableCell align="right">{row.dateInscrit}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pharmacy
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell >FirmName</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Town</TableCell>
                    <TableCell >Cordinate</TableCell>
                    <TableCell align="right">Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.firm.map((firmRow) => (
                    <TableRow key={firmRow.address}>
                      <TableCell align="left">{firmRow.firmName}</TableCell>
                      <TableCell component="th" scope="row">
                        {firmRow.address}
                      </TableCell>
                      <TableCell>{firmRow.town}</TableCell>
                      <TableCell >
                        <a
                          href={`https://www.google.com/maps/@${firmRow.cordinate}z`}
                        >
                          {firmRow.cordinate}
                        </a>
                      </TableCell>
                      <TableCell>{firmRow.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    firm: PropTypes.arrayOf(
      PropTypes.shape({
        cordinate: PropTypes.number.isRequired,
        town: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

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
            <TableCell />
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>

            <TableCell align="right">Speciality</TableCell>
            <TableCell align="right">Date d'inscription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
