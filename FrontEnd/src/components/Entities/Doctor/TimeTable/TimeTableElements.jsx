import styled from "styled-components";
export const Main=styled.div`
margin-left:50px;
width:100%;

display: grid;
`
export const DateBox = styled.button`
  border: 1px solid #c6c6c6;
  border-radius: 4.4418px;
  width: 60.03px;
  height: 60.93px;
  margin: 5px;
  &:hover {
    cursor:pointer;
  }
  ${({ statusBox }) => statusBox === "Comfort" && "background:#01bf71;"};
  ${({ statusBox }) => statusBox === "UnAvailable" && "background:#ff4842;"};
`;

export const HourTitle = styled.p`
  width: 72.92px;
  height: 21.88px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 18.9595px;
  line-height: 22px;
  color: #828282;
  margin: 0px;
`;
export const DayTitle = styled.p`
  width: 70px;
  height: 72.97px;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  color: #828282;
`;
export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 80px;
`;
export const HoursWrapper = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
`;
export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  background-color: #48a8ef;
  width: 350px;
  height: 65px;
  padding:auto;
  border-raduis: 0px 10px 10px 0px;
`;

export const HeaderText = styled.h2`
  font-size: 2rem;
  color: #fff;
  position:relative;
  padding: 10px 20px;
`;
export const DayHoursWrapper = styled.div`
 display:flex;
 flex-direction:column;
 padding-top: 5px;
 `;

export const ButtonsWrapper = styled.div`
  max-width: 500px;
  position: relative;
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Triangle=styled.div`
width: 0;
height: 0;
border-top: 65px solid #48a8ef;
border-right: 40px solid transparent;`
