import styled from 'styled-components';

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
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
  export const FormPharmacy = styled.form`
  background-color: #010101;
  max-width: 100%;
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
export const FormButtonSave = styled.button`
  background: #1E90FF;
  padding: 13px ;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
   color: #010606;
  }
  margin-bottom: 32px;
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
margin-left:250px;
margin-right:250px;
`
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #01bf71;
  font-size: 40px;
  font-weight: 400;
  text-align: left;
  margin-left: 310px;
`