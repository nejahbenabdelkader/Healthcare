import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, IconStyle } from './SigninElements'
import { FaEnvelope , FaLock ,FaDirections } from 'react-icons/fa'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Mydoctor</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Welcome back! Login to accees MyDoctor website</FormH1>
              <FormLabel htmlFor='for'><IconStyle><FaEnvelope/></IconStyle>Email</FormLabel>
                <FormInput htmlFor='email' placeholder='Enter your email' required ></FormInput>
              <FormLabel htmlFor='for'><IconStyle><FaLock/></IconStyle>Password</FormLabel>
                <FormInput htmlFor='password' placeholder='Enter your password' required ></FormInput>
              <FormButton type='submit'><IconStyle><FaDirections/></IconStyle>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
