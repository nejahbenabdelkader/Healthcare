import styled from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  height:auto;
  width:100%;
  color:black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;
export const FlexWrapperOne = styled.div`
  display: flex;
  background-color:inherit;
  align-items: flex-start;
  
`;
export const Title = styled.h2`
  height: 20px;
  margin-top:30px;
  background-color:inherit;
  width: 280px;
  padding-left: 10px;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  color: rgba(23, 140, 248, 1);
  position: relative;
`;
export const Call = styled.button`
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  width:150px;
  margin-top:5%;
  border-radius: 10px;
  display: flex;
  position:relative;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;
export const Icon = styled.img`
  width: 31px;
  height: 32px;
  background-color:inherit;
  margin : auto 10px ;
`;
export const MakeACall = styled.p`
  height: 45px;
  background-color:inherit;
  width: 80%px;
  margin : auto 10px ;
  color:white;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const Location = styled.p`
  height: 41px;
  width: 350px;
  font-family: "Roboto";
  font-size: 17px;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  margin-top: 13px;
`;
