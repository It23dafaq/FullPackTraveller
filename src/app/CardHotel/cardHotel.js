import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './cardHotel.css';





class CardHotel extends Component  {
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
    <div className="row justify-content-center">
<div className="col-auto">
    <div className="media">
        <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
           </div>
          <img className="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
          <div className="media-body pl-3">
              <div className="stars"><span className="float-left"><i className="text-warning fa fa-star"></i></span></div>
            <div className="price">$799,000<small className="mr-1">New York </small></div>
            <div><big>Excellent city hotel. Good for sightseeing with nearby parking areas. Great rooms and fantastic service. Awesome vibe.</big></div>
            <div className="stats">
                <span><i className="fa fa-arrows-alt"></i>1678 Sq ft</span>
                <span><i className="fa fa-bath"></i>2 Beadrooms</span>
            </div>
            <div className="address">4062 Walnut Hill Drive
        Cincinnati</div>
          </div>
        </div>
        </div>
        </div>
        <div className="row justify-content-center">
    <div className="col-auto listing-block">
        <div className="media">
            <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
               </div>
              <img className="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
              <div className="media-body pl-3">
                  <div className="stars"><span className="float-left"><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></span></div>
                <div className="price">$799,000<small className="mr-1">New York </small></div>
                <div><big>Excellent city hotel. Good for sightseeing with nearby parking areas. Great rooms and fantastic service. Awesome vibe.</big></div>
                <div className="stats">
                    <span><i className="fa fa-arrows-alt"></i>1678 Sq ft</span>
                    <span><i className="fa fa-bath"></i>2 Beadrooms</span>
                </div>
                <div className="address">4062 Walnut Hill Drive
            Cincinnati</div>
              </div>
            </div>
            </div>
            </div>
        </>
  );
 }
}

export default CardHotel;
