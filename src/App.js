import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import MainPage from './app/mainPage/mainPage'
import './App.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
      <Container>
        <MainPage/>
      </Container>
  );
}

export default App;
