import Select from 'react-select';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Dropdown from 'react-bootstrap/Dropdown'

import AirPorts from '../../store/airPorts'
import './dropdown.css';
class DropDownSelect extends Component  {
  constructor(props) {
   super(props);
   this.state={
     label:null,
     value:null,
   }
 }

 render(){

  return (

    <Row className="dropDownSelect">
     <Col >
     <h5>From</h5>
     </Col>
     <Col>
    <Select options={AirPorts} onChange={opt =>
      this.setState({value:opt.value,label:opt.label })} />
    </Col>
   </Row>


  );
 }
}

export default DropDownSelect;
