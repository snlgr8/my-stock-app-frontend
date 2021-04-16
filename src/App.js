import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp.component';
import { getCategories, addCategory } from './services/categories.service';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCategories();
    //addCategory({ name: 'Sample', icon: 'sample', subtype: ['abc'] });
  }, []);
  return (
    <AppContainer>
      <Header />
      <SignInSignUp />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #cbebe3,
    #c3eae3,
    #bae9e4,
    #b2e7e5,
    #a9e6e7,
    #9ce2e2,
    #8eddde,
    #80d9d9,
    #6bd1ca,
    #57c9b9,
    #46c0a6,
    #39b792
  );
  height: 100vh;
`;
