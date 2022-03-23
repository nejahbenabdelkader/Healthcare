import styled from "styled-components";

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

export const Main = styled.div`
  overflow: hidden;
  box-sizing: content-box;
  padding-right: 10px;
  height: 180px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;
export const FlexWrapperOne = styled.div`
  display: flex;
  background-color: inherit;
  align-items: flex-start;
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

export const IconStyle = styled.div`
  color: ${({ color }) => (color ? "#000" : "#fff")};
  font-size: 25px;
  margin-bottom: 8px;
  margin: auto 10px;
`;
export const Call = styled.button`
  background-color: inherit;
  &:hover{
    cursor:pointer;
  }
  width:250px;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  margin: auto 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;
export const MakeACall = styled.p`
  background-color: inherit;
  margin:auto;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  font-weight: 500;
  align-items: center;
`;

export const Location = styled.p`
  height: 41px;
  width: 408px;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  color:black;
  align-items: center;
  margin-top: 13px;
`;



export const Description=styled.h2`
font-size: 1rem;
color:black;
margin-left:15px;
`

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    width:10%;

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`