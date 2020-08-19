import React from 'react';
import MainPage from './app/mainPage/mainPage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from './app/SearchResults/SearchResults'
import ListTickets from './app/TabTickets/TabTickets';

function App() {
  return (

        <Router>
           <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/SearchResults" component={SearchResults} />
            <Route exact path="/TicketsResults" component={ListTickets} />
        </Switch>
        </Router>
    
  );
}

export default App;
