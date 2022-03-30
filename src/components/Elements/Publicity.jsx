import React from "react";
import styled from "styled-components"
const Image = styled.img`
  height:70%;
  float:left;
  border-radius: 10px;
  margin:auto;
  object-fit: cover;

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