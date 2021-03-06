import styled from "styled-components";
import { Link } from "react-router-dom";

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
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;
export const Icon = styled.a`
  margin-left: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 8px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const IconStyle = styled.a`
  color: #ffff;
  font-size: 14px;
  margin-bottom: 8px;
  padding: 8px;
`;
// !!!! lel forgot password!!!!
// export const Text = styled.span`
// text-align: center;
// margin-top: 24px;
// color: #fff;
// font-size: 14px;
// `

export const SignInBtnLink = styled(Link)`
  background: #01bf71;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 16px 105px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
`;
export const ServicesIcon = styled.img`
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
width:200px;
text-decoration: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color:black;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`