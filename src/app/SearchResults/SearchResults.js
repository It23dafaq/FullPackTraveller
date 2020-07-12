import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    <div >
    <Row >
      <div className="divider-custom ">
      <h1 >Search Results</h1>
      </div>
    <div className="divider-custom ">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
      </div>

    </Row>
<Row className="backGroundMainPage">
    <Col>
  <RecipeReviewCard/>
  </Col>
    <Col >
    <RecipeReviewCard/>
    </Col>
      <Col>
      <RecipeReviewCard/>
      </Col>
      <Col>
        <RecipeReviewCard/>
      </Col>
      <Col>
        <RecipeReviewCard/>
      </Col>
</Row>



</div>


  );
 }
}

export default SearchResults;
