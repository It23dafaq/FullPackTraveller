import axios from "axios";
import * as actionTypes from "../actionTypes";

const baseUrl='https://api.skypicker.com/flights?';

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
export const getFlightsSuccess = flights => {
  console.log("get flights success", flights);
  
  return {
    type: actionTypes.GET_FLIGHTS,
    flights: flights
  };

};
export const getFlights = formdata => {
  console.log("here flights", formdata);
  return dispatch => {
    dispatch(callStart());
    //todo async actions

    axios
      .get('https://api.skypicker.com/flights?fly_from='+formdata.fly_from+'&'+'nights_in_dst_from='+formdata.nights_in_dst_from+'&'+'nights_in_dst_to='+formdata.nights_in_dst_to+'&'+'flight_type=round'+'&'+'partner=picky')
      .then(res => {
        console.log("flights inside call", res);
        if (res.data.error) {
          dispatch(callFail(res.data.error));
        } else {
          dispatch(getFlightsSuccess(res.data));
        }
      })
      .catch(err => {
        dispatch(callFail(err));
      });
  };
};
