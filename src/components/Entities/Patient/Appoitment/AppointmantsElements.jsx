import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  max-width: 100%;
  min-height: 400px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin:  auto;
  padding: 100px 2px;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const H1 = styled.h1`
  margin-bottom: 32px;
  color: #01bf71;
  font-size: 40px;
  font-family: sans-serif;
  font-weight: 400;
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  font-style: oblique;
`;
export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: auto;
  border: 1px solid #FFEEFD;;
  border-radius: 25px;
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 20px;
`;
export const TrHead = styled.tr`
  text-align: center;
  background-color: #f9ece5;
`;

export const Tr = styled.tr`
  background-color: ${({ status }) => {
    switch (status) {
      case "Scheduled":
        return "#F5F5F5";
      case "Canceled":
        return "rgb(255,0,0,0.4)";
      case "Done":
        return "rgb(34, 139, 34,0.4)";
    }
  }};
  text-align: center;
height:70px;
`;

export const Th = styled.th`
  background-color: inherit;
  padding: 10px;
  text-align: center;
  font-size: 26px;
  font-family: Serrif;
  color: #c8c8c8;
`;
