import React, { Component } from 'react';

class FilterHotel extends Component  {

  constructor(props) {

   super(props);
   this.state = {
     value: '',
 };

 }


 render(){

  return (
    <div className="">
    	<article className="card-group-item">
    		<header className="card-header">
    			<h6 className="title">Property Type </h6>
    		</header>
    		<div className="filter-content">
    			<div className="card-body">
    			<form>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				   Hotels
    				  </span>
    				</label>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				   Appartments
    				  </span>
    				</label>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				   Hostels
    				  </span>
    				</label>
            <label className="form-check">
              <input className="form-check-input" type="checkbox" value=""/>
              <span className="form-check-label">
               villas
              </span>
            </label>
            <label className="form-check">
              <input className="form-check-input" type="checkbox" value=""/>
              <span className="form-check-label">
               Guest houses
              </span>
            </label>
            <label className="form-check">
              <input className="form-check-input" type="checkbox" value=""/>
              <span className="form-check-label">
               Motels
              </span>
            </label>
    			</form>

    			</div>
    		</div>
    	</article>

    	<article className="card-group-item">
    		<header className="card-header">
    			<h6 className="title">Star Rating </h6>
    		</header>
    		<div className="filter-content">
    			<div className="card-body">
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			    1 star
    			  </span>
    			</label>
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    	      2 stars
    			  </span>
    			</label>
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			   3 stars
    			  </span>
    			</label>
          <label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			   4 stars
    			  </span>
    			</label>
          <label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			   5 stars
    			  </span>
    			</label>
          <label className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
            <span className="form-check-label">
             Unrated
            </span>
          </label>
    			</div>
    		</div>
    	</article>
    </div>
  );
 }
}

export default FilterHotel;
