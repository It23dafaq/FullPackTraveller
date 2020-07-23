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
    <div className="card">
    	<article className="card-group-item">
    		<header className="card-header">
    			<h6 className="title">Brands </h6>
    		</header>
    		<div className="filter-content">
    			<div className="card-body">
    			<form>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				    Mersedes Benz
    				  </span>
    				</label>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				    Nissan Altima
    				  </span>
    				</label>
    				<label className="form-check">
    				  <input className="form-check-input" type="checkbox" value=""/>
    				  <span className="form-check-label">
    				    Another Brand
    				  </span>
    				</label>
    			</form>

    			</div>
    		</div>
    	</article>

    	<article className="card-group-item">
    		<header className="card-header">
    			<h6 className="title">Choose type </h6>
    		</header>
    		<div className="filter-content">
    			<div className="card-body">
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			    First hand items
    			  </span>
    			</label>
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			    Brand new items
    			  </span>
    			</label>
    			<label className="form-check">
    			  <input className="form-check-input" type="radio" name="exampleRadio" value=""/>
    			  <span className="form-check-label">
    			    Some other option
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