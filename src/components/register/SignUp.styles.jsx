import styled from 'styled-components';
import { CustomButton } from '../login/SignIn.styles';

export const SignUpContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 3px solid #4ac3aa;
  //background-color: white;
  width: 380px;
`;

export const FormInput = styled.input``;

export const CustomButtonSignUp = styled(CustomButton)`
  width: 170px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
`;
