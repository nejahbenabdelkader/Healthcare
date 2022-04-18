import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
export const Main = styled.div`
  overflow: hidden;
  box-sizing: content-box;
  padding-right: 10px;
  height: 50px;
  margin-top: 50px;
  width: 20%;
  border-radius: 10px;
`;

const Loading = () => {
  return (
    <Main>
      <CircularProgress size={50}/>
    </Main>
  );
};
export default Loading