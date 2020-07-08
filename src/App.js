import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import MainPage from './app/mainPage/mainPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MainPage name="Constantinos Foulidis" working="Web Developer" knowledge="react js - javascript - angular js - unity - android - kotlin - nodejs - jquery - angular 8-9 - java" />
      
    </header>
    </div>
  );
}

export default App;
