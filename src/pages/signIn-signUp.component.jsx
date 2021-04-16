import React from 'react';
import styled from 'styled-components';
import SignIn from '../components/login/SignIn.component';
import SignUp from '../components/register/SignUp';

function SignInSignUp() {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
}

export default SignInSignUp;

const SignInSignUpContainer = styled.div`
  display: flex;
  //background-color: #f0f2f1;
  padding: 20px;
  margin-top: 10px;
  justify-content: center;
`;
