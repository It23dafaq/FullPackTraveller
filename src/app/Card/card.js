import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown'
import './card.css';


class CardsFlights extends Component  {
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
    <div className="container">
   <div className="row">
     <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
       <ul className="event-list">
         <li>
         <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
           <time >
             <p>Athens</p>
             <p>Italy</p>
           </time>
           <div className="info">
             <h2 className="title">Flights Details</h2>
             <p className="desc">United States Holiday</p>
              <p>test </p>
           </div>
           <div className="social">
             <ul>
               <li className="facebook" ><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
               <li className="twitter" ><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
               <li className="google-plus" ><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
             </ul>
           </div>
         </li>
       </ul>
     </div>
   </div>
 </div>
  );
 }
}

export default CardsFlights;
