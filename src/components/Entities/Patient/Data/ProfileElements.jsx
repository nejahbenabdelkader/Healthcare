import styled from "styled-components";
export const Main = styled.div`
  overflow: hidden;
  box-sizing: content-box;
  padding-right: 10px;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;


export const ImgWrap = styled.img`
  width: 75px;
  height: 75px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 10px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Title = styled.p`
  height: 20px;
  margin: 15px -10px;
  background-color: inherit;
  width: 544px;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  color: rgba(23, 140, 248, 1);
  display: flex;
  align-items: center;
  position: relative;
`;
export const DateOfBirth=styled.h2`
font-size: 1.5rem;
color:black;
margin-left:15px;
`