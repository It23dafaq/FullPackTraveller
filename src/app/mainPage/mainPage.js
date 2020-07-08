import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown'
import DropDownSelect from '../DropdownSelect/dropDownSelect'
import Select from 'react-select';
import Form from 'react-bootstrap/Form'
import './mainPage.css';
import AirPorts from '../../store/airPorts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MainPage extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     link:null,
     flag:false,
     label:null,
     valueInput:null,
 };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  handleSubmit(event) {

   event.preventDefault();
   let data = this.state.value;
   console.log(data);
   this.setState({
     link:data,
     flag:true,
   })



 }
 render(){

  return (

  <Row>
    <Col><img  src={process.env.PUBLIC_URL + '/assets/img/world.png'} alt="" /> <h5>from</h5></Col>
    <Col></Col>
     <Col><div className="dropDownSelect">
      <Select options={AirPorts} onChange={opt =>
       this.setState({valueInput:opt.value,label:opt.label })} />
      </div>
    </Col>
  </Row>





  );
 }
}

export default MainPage;
