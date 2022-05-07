import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import DoctorsTable from "./DoctorsTable";
import PharmacyTable from "./PharmacyTable";
import PatientTable from "./PatientTable";
import { Box, Container } from "@mui/material";

export default function UsersTable() {
  const [table, setTable] = React.useState("DOCTOR");
  const handleChangeType = (e) => {
    setTable(e.target.value);
  };
  const tableData = () => {
    switch (table) {
      case "DOCTOR":
        return <DoctorsTable />;
      case "PHARMACIEN":
        return <PharmacyTable />;
      case "PATIENT":
        return <PatientTable />;
    }
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <FormControl sx={{ mr: 5 }}>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  color: "white",
                  mt: 5,
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
                value="DOCTOR"
                onChange={handleChangeType}
                control={<Radio />}
                label="Doctor"
              />
              <FormControlLabel
                sx={{
                  color: "white",
                  mt: 5,
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
                value="PHARMACIEN"
                onChange={handleChangeType}
                control={<Radio />}
                label="Pharmacien"
              />
              <FormControlLabel
                sx={{
                  color: "white",
                  mt: 5,
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
                value="PATIENT"
                onChange={handleChangeType}
                control={<Radio />}
                label="Patient"
              />
            </RadioGroup>
          </FormControl>
          {tableData()}
        </Box>
      </Container>
    </>
  );
}
