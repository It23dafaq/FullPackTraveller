import axios from "axios";
import * as actionTypes from "../actionTypes";

const baseUrl='https://api.skypicker.com/flights?';
const baseUrlTquila='https://tequila-api.kiwi.com/v2/search?';
//  url='http://localhost:2020/api/Flights/search?airport='+formdata.fly_from+'&'+'daysInDestination='+formdata.nights_in_dst_to+'&flight_type='+formdata.flight_type+'&priceTo='+formdata.range[1]
//http://localhost:2020/api/Flights/search
//https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3
const callFail = errorMessage => {
    return {
        type: actionTypes.CALL_FAIL,
        message: errorMessage
    };
}


export const callStart = () => {
  return {
    type: actionTypes.CALL_START
  };
};
export const getHotelSuccess = hotels => {

  return {
    type: actionTypes.GET_HOTELS,
    hotels: hotels
  };

};
export const getHotels = (formdata,budget) => {
  console.log("here Hotels", formdata);
  console.log("here Hotels", budget);
  let url;
  var budget= budget-formdata.price.EUR
  return dispatch => {

    dispatch(callStart());
  //  if(formdata.flight_type=='round'){
      //url='https://tequila-api.kiwi.com/v2/search?fly_from='+formdata.fly_from+'&'+'nights_in_dst_from='+formdata.nights_in_dst_from+'&nights_in_dst_to='+formdata.nights_in_dst_to+'&flight_type='+formdata.flight_type+'&'+'partner_market= alpha-2'+'&dateFrom=7/11/2020&dateTo=12/12/2020'+'&max_stopovers=0&type_flights=lcc&ret_from_diff_airport=0'
       url='http://localhost:2020/api/Hotels/search?cityName='+formdata.destination.city+'&checkIn='+formdata.destination.arrival+'&checkOut='+formdata.destination.departure+'&budget='+budget+'&adults=1'
    //}else{
  //    url='https://tequila-api.kiwi.com/v2/search?fly_from='+formdata.fly_from+'&'+'flight_type='+formdata.flight_type+'&'+'partner_market= alpha-2'+'&dateFrom=7/11/2020&dateTo=12/12/2020'+'&max_stopovers=0&type_flights=lcc&ret_from_diff_airport=0'
  //  }
    //todo async actions
//axios.defaults.headers.common['apikey '] = 'GxbUOWZfAq4rY7wruD52NTfDxzJTGgO1'
    axios
      .get(url,
      {
   headers: {
     //apikey: 'GxbUOWZfAq4rY7wruD52NTfDxzJTGgO1',
    //the token is a variable which holds the token
   }
 })
      .then(res => {
        console.log("flights inside call", res);
        if (res.data.error) {
          dispatch(callFail(res.data.error));
        } else {
          dispatch(getHotelSuccess(res.data));
        }
      })
      .catch(err => {
        dispatch(callFail(err));
      });
  };
};
