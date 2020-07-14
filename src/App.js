import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import MainPage from './app/mainPage/mainPage'
import './App.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from './app/SearchResults/SearchResults'
import ListTickets from './app/TabTickets/TabTickets';

function App() {
  return (
      <div className="main-view">
        <Router>
           <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/SearchResults" component={SearchResults} />
            <Route exact path="/TicketsResults" component={ListTickets} />
        </Switch>
        </Router>
      </div>
  );
}

export default App;
