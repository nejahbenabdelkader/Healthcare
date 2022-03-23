import styled from "styled-components";
export const Main = styled.div`
  overflow: hidden;
  height: auto;
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
  font-size: 2rem;
  color: #fff;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const MonthText = styled.h2`
  font-size: 2rem;
  color:black;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const DaysWrapper = styled.div`
  display: flex;
  margin: 5px 1rem ;
  gap:20px;
`;
export const MonthSelector = styled.div`
  display: flex;
  gap:15px;
  margin:15px auto ;
  align-items: center;`;
export const Day = styled.button`
  overflow: hidden;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
  text-align: center;
  background:${({selected})=> selected ? "#01bf71" : "#E6E6E6"} ;
  &:hover {
    cursor:pointer;
  }
`;

export const Hour=styled.button`
  overflow: hidden;
  height: 30px;
  width:90px;
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 1);
  text-align: center;
  background:${({selected})=> selected ? "#01bf71" : "#E6E6E6"} ;
  &:hover {
    cursor:pointer;
  }
`

export const HoursWrapper=styled.div`
  display:grid;
  gap: 10px;
  margin: 10px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr ;
`

export const DayText=styled.h4`
margin:5px auto;
color:${({selected})=> selected ? "white" : "black"} ;
font-weight: 600;
`

export const HourText=styled.h4`
font-family: 'Red Hat Mono';
font-weight: 400;
color:black;
margin:auto;
font-size: 20px;
color:${({selected})=> selected ? "white" : "black"} ;
`
export const DayNumber=styled.p`
font-size: 1.2rem;
color:${({selected})=> selected ? "white" : "black"} ;
margin:5px auto;
font-weight: 500;
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
  export const SaveButton = styled.button`
  background: #1E90FF;
  padding: 13px ;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
  margin: 10px auto;
  &:hover {
    border: 1px solid rgba(196, 196, 196, 1);
    transition: all 0.2s ease-in-out;
    background: #fff;
   color: #010606;
  }
`