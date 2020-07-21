import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Dropdown from 'react-bootstrap/Dropdown'

class TrendingHolder extends Component  {
  constructor(props) {
   super(props);
   this.state={
     label:null,
     value:null,
   }
 }

 render(){

  return (

    <Row>
     <Col className="text-center mr-5">
      <img className="rounded-circle trendingImageHolder" src="/assets/img/logoryanair.png" />
      <h2>Japan</h2>
      <p>some small example why people want to go there</p>
      <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
     </Col>
   </Row>


  );
 }
}

export default TrendingHolder;
