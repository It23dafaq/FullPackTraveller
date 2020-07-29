import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import ScrollableTabsButtonPrevent from '../TabsPanel/Tabs.js'

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

      <Row>
        <ScrollableTabsButtonPrevent/>
      </Row>




  );
 }
}

export default SearchResults;
