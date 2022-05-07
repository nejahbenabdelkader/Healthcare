import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

 function DoctorRow(props) {
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
          <TableCell >{row.phoneNumber}</TableCell>
          <TableCell >{row.email}</TableCell>
          <TableCell >{row.gender}</TableCell>
          <TableCell >{row.speciality}</TableCell>
          <TableCell >{row.dateInscrit}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Firm
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Address</TableCell>
                      <TableCell>Town</TableCell>
                      <TableCell align="right">Cordinate</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.firm.map((firmRow) => (
                      <TableRow key={firmRow.address}>
                        <TableCell component="th" scope="row">
                          {firmRow.address}
                        </TableCell>
                        <TableCell>{firmRow.town}</TableCell>
                        <TableCell align="right">
                          <a
                            href={`https://www.google.com/maps/@${firmRow.cordinate}z`}
                          >
                            {firmRow.cordinate}
                          </a>
                        </TableCell>
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

  DoctorRow.propTypes = {
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


  export default DoctorRow
  