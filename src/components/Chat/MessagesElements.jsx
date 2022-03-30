import styled from "styled-components";

export const Frame1 = styled.div`
  padding: 2px 30px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Date = styled.p`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-align: right;
  margin-bottom: 12px;
  margin-left: 110px;
  letter-spacing: 1px;
`;
export const FlexWrapperOne = styled.div`
  background-color: ${({ sender }) => (sender ? "#373E4E" : "#272A35")};
  border-radius: 20px;
  padding: 0 20px 0 11px;
  display: flex;
  align-items: flex-start;
`;
export const Message = styled.p`
  height: 60px;
  width: 249px;
  font-family: "Roboto";
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  color: white;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 1px;
`;