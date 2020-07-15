import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
//import Dropdown from 'react-bootstrap/Dropdown'
import './card.css';
import {selectedTicket} from '../../store/actions/mainPageActions'

class CardsFlights extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     hover: false,
     key: {0:true},
     lastKey:0
 };
  //this lines passing this to all methods
//   this.handleChange = this.handleChange.bind(this);
 this.handleSelected = this.handleSelected.bind(this);
 this.handleBlur = this.handleBlur.bind(this);
 }
 handleSelected(index) {
   this.setState(prevState => {
        return { key: { ...prevState.key, [this.state.lastKey]: false },lastKey:index };
      });
   this.setState(prevState => {
        return { key: { ...prevState.key, [index]: true },lastKey:index };
      });
      this.props.selectedTicket(index);
 }
 handleBlur(index) {
   this.setState(prevState => {
        return { key: { ...prevState.key, [index]: false } };
      });
 }

 handleClose = (href) => {
   window.open(
    href,
  '_blank' // <- This is what makes it open in a new window.
);
 }


 render(){
console.log(this.state);
   //const  = this.state.isHovered ? "pulse animated" : "";
 //    let classSelected;
 //    if(this.state.key!=null){
 //   if(this.state.key[this.state.lastKey){
 //     classSelected =  "selected_ticket";
 //   }else{
 //     classSelected="";
 //   }
 // }
  console.log(this.state.key[0]);

  return (
      this.props.filteredFlights.map((key,index) => (
    <div className={"container border  cover-tickets pt-3 marginBottomCards "+(this.state.key[index] ? 'selected_ticket' : '')}  onClick={ () => this.handleSelected(index) }
      key={index}>
       <ul className="event-list">
         <li>
         <img alt="Independence Day" src="/assets/img/logoryanair.png" />
           <time >
             <p className="mt-4">27</p>
             <p >{key.route[0].utc_departure}</p>
           </time>
           <div className="info">
             <Row  className="mt-3 ml-1">
              <Col>
                <p className="text-strokeDesign">7:55 am</p>
             </Col>

             <Col>
               <p className="text-strokeDesign">6h 55m </p>
            </Col>
            <Col>
              <p className="text-strokeDesign">7:55 pm</p>
           </Col>
           </Row>
            <Row className="ml-1 ">
              <Col>
                <p className="text-strokeDesign">{key.cityCodeFrom}</p>
              </Col>
              <Col>
                <p className="text-strokeDesign"> Direct</p>
              </Col>
              <Col>
                <p className="text-strokeDesign"> {key.cityCodeTo}</p>
              </Col>
            </Row>
           </div>
           <div>
           </div>
           <div className="social">
               <time>
                   {key.route.length==1 ? <>
                    <h3 className="mt-4">{key.price}€</h3>
                   <Row className="offset-3">
                     <Button className=""variant="contained" color="primary" onClick={() => this.handleClose(key.deep_link)}>
                       Book
                     </Button>
                   </Row>
                  </>
               : null}
               </time>
           </div>
         </li>
         {key.route.length>1 ? (
         <li>
         <img alt="Independence Day" src="/assets/img/logoryanair.png" />
           <time >
             <p className="mt-4">4</p>
             <p className="text-strokeDesign">{key.route[1].utc_departure}</p>
           </time>
           <div className="info ">
             <Row className="mt-3 ml-2">
              <Col>
                <p className="text-strokeDesign">7:55 am</p>
             </Col>
             <Col>
               <p className="text-strokeDesign">6h 55m </p>
            </Col>
            <Col>
              <p className="text-strokeDesign">7:55 pm</p>
           </Col>
           </Row>
            <Row className="ml-2">
              <Col>
                <p className="text-strokeDesign">{key.route[1].cityCodeFrom}</p>
              </Col>
              <Col>
                <p className="text-strokeDesign"> Direct</p>
              </Col>
              <Col>
                <p className="text-strokeDesign"> {key.route[1].flyTo}</p>
              </Col>
            </Row>
           </div>
           <div className="social">
                 <time>
                   <h3 className="mt-4">{key.price}€</h3>
                 </time>
                 <Row className="offset-3">
                   <Button className=""variant="contained" color="primary" onClick={() => this.handleClose(key.deep_link)}>
                     Book
                   </Button>
                 </Row>
           </div>

         </li>
       ) : null}
       </ul>
   </div>
)));
 }
}
const mapStateToProps = (state, props) => {
  return {
    flights: state.main.flights,
    loading: state.main.loading,
    error: state.main.error,
    itookData: state.main.itookData,
    filteredFlights:state.main.filteredFlights,
    ...props
  };
};
const mapDispatchToProps = dispatch => {
  return {
    selectedTicket: index => dispatch(selectedTicket(index))
  };
};
export default  connect(mapStateToProps, mapDispatchToProps)(CardsFlights);
