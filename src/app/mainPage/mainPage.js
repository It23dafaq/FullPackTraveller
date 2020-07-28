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
import Button from 'react-bootstrap/Button'
import MapChart from "../mapChart/mapChart";
import { connect } from 'react-redux'
import {getFlights} from '../../store/actions/mainPageActions'
import Slider from '@material-ui/core/Slider';
import LinearIndeterminate from '../Spinner/ProgressBar'
import SearchIcon from '@material-ui/icons/Search';
import ReactTooltip from "react-tooltip";
import Countrys from "../../store/countrys"


class MainPage extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     link:null,
     flag:false,
     label:null,
     valueInput:null,
     rangeValues:[0 ,20],
     rangeValue:null,
     isCheckedOneWay:false,
     isCheckedRound:true,
     daysIndest:0,
     content:'',
     countrys:[],

 };
  //this lines passing this to all methods
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.valuetext = this.valuetext.bind(this);
    this.radioButtonchangedRound = this.radioButtonchangedRound.bind(this);
    this.radioButtonchangedOneway = this.radioButtonchangedOneway.bind(this);
    this.handleChangeDaysInDest = this.handleChangeDaysInDest.bind(this);
    this.setContent = this.setContent.bind(this);
    this.setCountrys = this.setCountrys.bind(this);
 }

//this method handles range cahnges
  handleChangeRange = (event,newValue) => {

    this.setState({rangeValues: newValue});
 };
 handleChangeDaysInDest(event) {
   this.setState({daysIndest: event.target.value});
 }
 //this method handles selector
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  //this method is handling toolip
  setContent(e){
      this.setState({content: e})
  }
  //this method fill array with sellected countrys
  setCountrys(e){
    if(this.state.countrys.some(elem => elem.name === e)){
      this.setState({countrys: this.state.countrys.filter(function(country) {
       console.log(country);
       return country.name !== e
        })});
    }else{
      let newArray = Countrys.filter(function (name){
         return name.name === e
      })
      console.log(newArray);
    this.setState({countrys:[...this.state.countrys,newArray[0]]})
      }
      console.log(this.state.countrys);
  }
  componentDidUpdate(){

    if(this.props.itookData==true){
      this.props.history.push({
       pathname: "/SearchResults"
     });
    }
  }
  //this method handles the onsubmit button
  handleSubmit(event) {

   event.preventDefault();
   if(this.state.value==''&& this.state.daysIndest==0){
     window.alert("fill all fields")
   }else{
   let data = this.state.value;
   this.setState({
     link:data,
     flag:true,
   })
    let parameters = {}
    parameters.fly_from = this.state.value;
    if(this.state.isCheckedRound){
        parameters.flight_type = 'round';
        parameters.return = 1;
    }else{
        parameters.flight_type = 'oneway';
    }
     parameters.nights_in_dst_from=this.state.daysIndest;
     parameters.nights_in_dst_to = this.state.daysIndest;
     parameters.range = this.state.rangeValues;
     this.props.getFlights(parameters);
  }
}
 //this method needs for range
  valuetext(value) {
   return `${value}°C`;
 }
 //this method handle radio button Round
 radioButtonchangedRound(){
   this.setState({isCheckedRound:!this.state.isCheckedRound,
    isCheckedOneWay:!this.state.isCheckedOneWay});
 }
 //this method handle radio button oneway
 radioButtonchangedOneway(){
    this.setState({isCheckedOneWay:!this.state.isCheckedOneWay,
    isCheckedRound:!this.state.isCheckedRound});
 }
 //onFocus changing style dynamicaly on Search
 onFocusSearch(){

    //$('#portfolio').css('background-image','url(assets/img/airplane.jpg)');
  // document.getElementById('portfolio').style.backgroundImage="url(assets/img/airplane.jpg)";
   document.getElementById('portfolio').style.animation="bounceIn 1.0s";
   document.getElementById('portfolio').style.backgroundRepeat="no-repeat";
   document.getElementById('portfolio').style.backgroundSize="cover";


 }
 //onFocus changing style dynamicaly on Header
 onFocusHeader(){

    //$('#portfolio').css('background-image','url(assets/img/airplane.jpg)');
    document.getElementById('portfolio').style.backgroundImage='none';
    document.getElementById('portfolio').style.animation='none';
    document.getElementById('portfolio').style.backgroundRepeat='none';
    document.getElementById('portfolio').style.backgroundSize='none';
    //$("#portfolio").addClass(".cover-gradient");
 }

 render(){
   let spinner;
   let selectedCountrys;
   //if props ->redux is loading ->comming data
   //Show loader
     if(this.props.loading){
       spinner=(
           <LinearIndeterminate />
       )
     }
     //if props ->redux Countrys not null ->
     //TODO IF user has login will be implle,emt hi mark here
  if(this.state.countrys.length !== 0){
     selectedCountrys=(
             <>

           </>

     )
  }

  return (
    <div className="backGroundMainPage"  >
          <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
              <div className="container">
                  <a className="navbar-brand js-scroll-trigger" href="#page-top">{this.props.name}</a>
                  <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Search</a></li>
                          <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <header onMouseOver={this.onFocusHeader} className="masthead  text-white text-center">
              <div className="container d-flex align-items-center flex-column">
                 <h1>Simply The Best</h1>
                   <MapChart setTooltipContent={(e) => this.setContent(e)} setCountrys={(e)=> this.setCountrys(e)} data={this.state.countrys} />
                   <ReactTooltip>{this.state.content}</ReactTooltip>
                    {selectedCountrys}
                   <h3 className="text-dark">Reasons for Choosing US</h3>
                   <p  className="text-dark">Best travel offers</p>
                  <div className="divider-custom ">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i ></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
              </div>
          </header>
          <section className="page-section portfolio mt-5 p-5" id="portfolio"  onMouseOver={this.onFocusSearch}>
              <div className="container ">
                  <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Search</h2>
                  <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i><SearchIcon/></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  <Form className="backgroundColorSearch">
                    {spinner}
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      From
    </Form.Label>
    <Col sm={10} className="text-dark">
        <Select options={AirPorts} onChange={opt =>
        this.setState({value:opt.value,label:opt.label })} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Budget
    </Form.Label>
    <Col sm={10}>
      <Form.Label></Form.Label>
        <div className="width-200px">
          <Slider
            value={this.state.rangeValues}
            onChange={this.handleChangeRange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={this.valuetext}
            max={1000}
          />
       </div>
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Type of flight
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="One Way"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange={this.radioButtonchangedOneway}
          checked={this.state.isCheckedOneWay}
        />
        <Form.Check
          type="radio"
          label="Return"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange={this.radioButtonchangedRound}
          checked={this.state.isCheckedRound}
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group >
  <label className="mr-5" htmlFor="quantity">days in destination :</label>
  <input type="number" id="quantity" name="quantity" min="1" max="90" value={this.state.daysIndest} onChange={(e)=>this.handleChangeDaysInDest(e)}/>
  </Form.Group>


  <Form.Group as={Row} >
    <Col sm={{ span: 10, offset: 9 }}>
      <Button type="button" onClick={this.handleSubmit}>Search</Button>
    </Col>
  </Form.Group>
</Form>

      </div>
  </section>
          <section className="page-section portfolio" id="about">
              <div className="container">
                  <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
                  <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  <div className="jumbotron p-3 p-md-5 text-white rounded backgroundColorAbout">
                    <div className="col-md-6 px-0">
                      <h1 className="display-4 font-italic">For travellers by Travellers</h1>
                      <p className="lead my-3">We are somebody who love to travell around the world but with limits and we just want to travel.We offer you a full package with the budget you have! </p>
                    </div>
                  </div>
                </div>
        </section>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
          <script src="assets/mail/jqBootstrapValidation.js"></script>
          <script src="assets/mail/contact_me.js"></script>
          <script src="js/scripts.js"></script>


     </div>






  );
 }
}
//this method let us having acces to variables we need or information via redux
const mapStateToProps = (state, props) => {
  return {
    flights: state.main.flights,
    loading: state.main.loading,
    error: state.main.error,
    itookData: state.main.itookData,
    ...props
  };
};
//this method let us acces function for async or simple tasks
const mapDispatchToProps = dispatch => {
  return {
    getFlights: formdata => dispatch(getFlights(formdata))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
