import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown'
import './cardHotel.css';
import {getHotels} from '../../store/actions/hotelActions'
import { connect } from 'react-redux'
import * as moment from 'moment'
import CircularIndeterminate from '../Spinner/circle'
import Button from '@material-ui/core/Button';



class CardHotel extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
 };
  //this lines passing this to all methods
//   this.handleChange = this.handleChange.bind(this);

 }
componentDidMount(){
  if(this.props.selected!=null){
    this.props.selected.destination.departure=moment(this.props.selected.destination.departure).format("MM/DD/YYYY");
    this.props.selected.destination.arrival=moment(this.props.selected.destination.arrival).format("MM/DD/YYYY");
    console.log(moment(this.props.selected.destination.departure).format("DD/MM/YYYY") );
     this.props.getHotels(this.props.selected,this.props.Budget)
  }
}

 render(){
  //<div>{this.props.selected.destination.arrival} {this.props.selected.destination.departure}</div> line 64
     let spinner;
     let hotels;
      //Show loader
     if(this.props.loading){
       spinner=(
           <CircularIndeterminate />
       )
     }
     if(this.props.hotel!=null ){
       hotels=(
           this.props.hotel.map((key,index) =>{
             return(
         <div key={index} className="row justify-content-center">
       <div className="col-8">
         <div className="media">
             <div className="fav-box border "><p>{key.rating/10}</p>
                </div>
               <img className="d-flex align-self-start" src={key.photoHref} alt="Generic placeholder image"/>
               <div className="media-body pl-3">
                   <div className="stars">
                       <span className="float-left">
                         {[...Array(key.stars)].map((key,index) =>{
                          return(
                         <i key={index} className="text-warning fa fa-star"></i>
                         )})}
                      </span>
                  </div>
                 <div className="price">{key.estimatedPrice}€<small className="mr-1">{key.name}</small></div>
                 <div><big>{key.summary}</big></div>
                 <div className="float-left">
                   <div className="col">
                   <Button className=""variant="contained" color="primary" onClick={() => this.handleClose(key.deep_link)}>
                     View more Details
                   </Button>
                   </div>
                 </div>
               </div>
             </div>
             </div>
             </div>
          )  } )

       )
     }
  return (
    <>
      {spinner}
      {hotels}

    </>
  );
 }
}
const mapStateToProps = (state, props) => {
  return {
    hotel: state.hotel.hotels,
    loading: state.hotel.loading,
    error: state.hotel.error,
    selected:state.main.selectedTicket,
    Budget:state.main.budget,
    ...props
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHotels: (data,budget) => dispatch(getHotels(data,budget))
  };
};


export default  connect(mapStateToProps, mapDispatchToProps)(CardHotel);
