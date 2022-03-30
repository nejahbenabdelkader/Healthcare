import styled from "styled-components";

export const Person = styled.div`
  padding: 14px 28px 17px 25px;
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 375px;
  border-radius: 10px;
  height:auto;
`;

export const FlexWrapperOne = styled.div`
  margin-right: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SenderName = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: white;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;
export const Message = styled.p`
  font-family: "Roboto";
  font-size: 17px;
  width:200px;
  font-weight: 400;
  line-height: normal;
  color: white;
  margin-left: 20px;
  letter-spacing: 1px;
`;
export const Date = styled.p`
  margin-left: 30px;
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-align: right;
  letter-spacing: 1px;
`;
