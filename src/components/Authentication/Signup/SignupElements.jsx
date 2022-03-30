import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba( 1, 147, 86, 1) 0%,
    rgba( 10, 201, 122, 1) 100%
  );
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const FormPatient = styled.form`
  background-color: #010101;
  max-width: 550px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 2px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
  export const FormPharmacy = styled.form`
  background-color: #010101;
  max-width: 1100px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 2px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
  export const FormDoctor = styled.form`
  background-color: #010101;
  max-width: 1100px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 2px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top : 20px;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  margin-left:-100px;
`
export const FormLabel1 = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  margin-left:-130px;
`
export const FormLabel2 = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  margin-left:-125px;
`
export const FormLabel3 = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  margin-left:-70px;
`
export const FormLabel4 = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  margin-left:-40px;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 8px;
`
export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 8px;
  width:195px;
`
export const FormOption = styled.option`
   margin-bottom: 8px;
   font-size: 14px;
   color: #006400;
`
export const FormButtonCreate = styled(Link)`
  background: #01bf71;
  padding: 16px 100px;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 350px;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
   color: #010606;
  }
`
export const FormButtonSign = styled.button`
background: #F1B312;
padding: 16px 0;
border: none;
border-radius: 8px;
color: #fff;
font-size: 20px;
cursor: pointer;
margin-top: 32px;
margin-left: auto;
margin-right: auto;
width: 350px;
text-decoration: none;
padding: 15px 15px;
&:hover {
       transition: all 0.2s ease-in-out;
       background: #fff;
      color: #010606;
     }
  }
`
export const IconStyle = styled.a`
  color: #FFFF  ;
  font-size: 14px;
  margin-bottom: 8px;
  padding :8px;
`
export const Table =styled.table`
text-align : center;
justifyContent: center;
alignItems: center;
border-radius : 7px;
`
export const ServicesIcon = styled.img`
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
width: 200px;
height:80px;
`;

