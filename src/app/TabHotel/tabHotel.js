import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown'
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
