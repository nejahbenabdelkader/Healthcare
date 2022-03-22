import styled from "styled-components";
export const Main = styled.div`
  overflow: hidden;
  height: 400px;
  width: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;

export const Header = styled.div`
  position: relative;
  box-sizing: content-box;

  top: 0px;
  height: 70px;
  border: 1px solid rgba(196, 196, 196, 1);
  background: #178cf8;
  width: 100%;
`;

export const HeaderText = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const MonthText = styled.h2`
  font-size: 2rem;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const DaysWrapper = styled.div`
  display: flex;
  margin: 5px auto ;
  gap:20px;
`;
export const MonthSelector = styled.div`
  display: flex;
  gap:15px;
  margin:15px auto ;
  align-items: center;`;
export const Day = styled.div`
  overflow: hidden;
  height: 70px;
  width: 70px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
  text-align: center;
`;

export const Hour=styled.div`
  overflow: hidden;
  height: 30px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 1);
  text-align: center;
  background: #E6E6E6;
`

export const HoursWrapper=styled.div`
  display:grid;
  gap: 10px;
  margin: 10px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr ;
`

export const DayText=styled.h4`
margin:5px auto;
font-weight: 600;
`

export const HourText=styled.h4`
font-family: 'Red Hat Mono';
font-weight: 400;
font-size: 20px;
`
export const DayNumber=styled.p`
font-size: 1rem;
margin:5px auto;
font-weight: 400;
`
export const SubmitButton = styled.div`
background: #FC7900;
  overflow: hidden;
  padding:px 25px;
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 1);
  margin-left:auto;
margin-right:10px;
margin-bottom:10px;
  `;
