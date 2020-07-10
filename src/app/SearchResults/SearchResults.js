import React, { Component } from 'react';
import CardsFlights from '../Card/card'
//import Dropdown from 'react-bootstrap/Dropdown'


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
    <div>
   <CardsFlights/>
     </div>






  );
 }
}

export default SearchResults;
