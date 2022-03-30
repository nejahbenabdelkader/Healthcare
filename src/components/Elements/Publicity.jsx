import React from "react";
import styled from "styled-components"
const Image = styled.img`
  width: 85%;
  height:50%;
  float:left;
  border-radius: 10px;
  margin:30px auto;

`;
const Publicity = ({srcImage}) => {
  return (
    <Image
      alt=""
      src={srcImage}
    />
  );
};

export default Publicity;