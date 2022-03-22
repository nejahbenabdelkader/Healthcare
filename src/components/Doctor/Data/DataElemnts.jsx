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
  width: 1000px;
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
  margin: 15px 0px;
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
  padding: 8px;
`;
export const Call = styled.button`
  background-color: inherit;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;
export const MakeACall = styled.p`
  background-color: inherit;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 25px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const Location = styled.p`
  height: 41px;
  width: 408px;
  background-color: inherit;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
  margin-top: 13px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
