import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../CardHotel/cardHotel.css';
import HotelIcon from '@material-ui/icons/Hotel';
import CardHotel from '../CardHotel/cardHotel';
import SwipeableTemporaryDrawer from '../Drawer/Drawer'
import FilterHotel from '../FilterHotelDetails/FilterHotelDetails'




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
   <div className="row  ml-2 displayFilter drawerButton">
   <SwipeableTemporaryDrawer />
   </div>
   <div className="row float-left ml-2 displayfullFilter drawerButton">
   <FilterHotel/>
   </div>
    <CardHotel/>
        </>

  );
 }
}

export default TabHotel;
