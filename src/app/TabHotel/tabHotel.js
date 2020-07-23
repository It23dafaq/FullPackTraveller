import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './tabHotel.css';
import HotelIcon from '@material-ui/icons/Hotel';
import CardHotel from '../CardHotel/cardHotel'




class TabHotel extends Component  {
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
    <>
   <div className="row">
   <div className="divider-custom ">
   <h1 >Hotel Results</h1>
   </div>
 <div className="divider-custom ">
       <div className="divider-custom-line"></div>
       <div className="divider-custom-icon"><i> <HotelIcon/></i></div>
       <div className="divider-custom-line"></div>
   </div>
   </div>
    <CardHotel/>
        </>

  );
 }
}

export default TabHotel;
