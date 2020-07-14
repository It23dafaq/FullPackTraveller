import React, { Component } from 'react';
import CardsFlights from '../Card/card'
import RecipeReviewCard from '../countryCards/countryCards'
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollableTabsButtonPrevent from '../TabsPanel/Tabs.js'
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import LocalAirportIcon from '@material-ui/icons/LocalAirport';

class TabSearch extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
 };
  //this lines passing this to all methods
//   this.handleChange = this.handleChange.bind(this);

 }
  groupBy(list, keyGetter) {
     const map = new Map();
     list.forEach((item) => {
          const key = keyGetter(item);
          const collection = map.get(key);
          if (!collection) {
              map.set(key, [item]);
          } else {
              collection.push(item);
          }
     });
     return map;
 }

 render(){
  let flights;
  if(this.props.itookData==true){
    const grouped = this.groupBy(this.props.flights,type=>type.cityTo);

    console.log("mpika sto flights dada",grouped);
    flights = (
          <RecipeReviewCard flightsGB={grouped}/>
    )
  }
  return (
    <>

    <Row>
      <div className="divider-custom ">
      <h1 >Search Results</h1>
      </div>
    <div className="divider-custom ">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i> <LocalAirportIcon/></i></div>
          <div className="divider-custom-line"></div>
      </div>

    </Row>
    <Row >
     {flights}
    </Row>
    </>


  );
 }
}

const mapStateToProps = (state, props) => {
  return {
    flights: state.main.flights,
    itookData: state.main.itookData,
    ...props
  };
};

export default connect(mapStateToProps, null)(TabSearch);
