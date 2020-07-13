import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollableTabsButtonPrevent from '../TabsPanel/Tabs.js'
import Slider from '@material-ui/core/Slider';

class SearchResults extends Component  {
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

      <Row>
        <ScrollableTabsButtonPrevent/>
      </Row>

   


  );
 }
}

export default SearchResults;
