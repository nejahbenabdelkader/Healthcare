import React from "react";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

const AlertComponent=({verified,setVerified,message})=> {

    return (
        <Box sx={{ width: "100%" ,}}>
          <Collapse in={!verified}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={() => {
                    setVerified(true);
                  }}
                >
                  <AiOutlineClose fontSize="inherit" />
                </IconButton>
              }
            >
             {message}
            </Alert>
          </Collapse>
        </Box>
    )
}

export default AlertComponent ;