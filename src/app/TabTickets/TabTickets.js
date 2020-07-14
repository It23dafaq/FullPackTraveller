import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollableTabsButtonPrevent from '../TabsPanel/Tabs.js'
import Slider from '@material-ui/core/Slider';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import './tabTickets.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class ListTickets extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
 };
  //this lines passing this to all methods
//   this.handleChange = this.handleChange.bind(this);

 }


 render(){

  return (
  <CardsFlights/>
  );
 }
}

export default ListTickets;
