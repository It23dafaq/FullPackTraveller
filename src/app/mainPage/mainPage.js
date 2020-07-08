import React, { Component } from 'react';
import './mainPage.css';

class MainPage extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     link:null,
     flag:false,
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
   <div>
     <p>Random Traveler</p>
   </div>
  );
 }
}

export default MainPage;
