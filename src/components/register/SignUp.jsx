import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { userRegistration } from '../../services/user.service';
import {
  ButtonContainer,
  CustomButton,
  FormContainer,
  FormInput,
  HeaderSpan,
  HeaderTitle,
  TitleContainer,
} from '../login/SignIn.styles';
import { CustomButtonSignUp, SignUpContainer } from './SignUp.styles';

function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  const {
    displayName,
    email,
    password,
    confirmPassword,
    username,
  } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // const { name, email, password, username } = userCredentials;
    const userProfile = {
      name: displayName,
      email,
      password,
      username,
    };
    userRegistration(userProfile);
    console.log(userProfile);
  };
  return (
    <SignUpContainer>
      <TitleContainer>
        <HeaderTitle>I do not have an account</HeaderTitle>
        <HeaderSpan>Sign up with your email and password</HeaderSpan>
      </TitleContainer>
      <FormContainer
        className='sign-up-form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
        />
        <FormInput
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          label='User Name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
        />
        <ButtonContainer>
          <CustomButtonSignUp type='submit'>Sign Up</CustomButtonSignUp>
        </ButtonContainer>
      </FormContainer>
    </SignUpContainer>
  );
}

export default SignUp;
