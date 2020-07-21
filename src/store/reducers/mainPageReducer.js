import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    flights: null,
    loading:false,
    error:null,
    itookData:false,
    filteredFlights:null,
    selectedTicket:null,
    journeys:null,
};

const callStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true,itookData:false } );
};

const callFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        itookData:false,
    });
};

const getFlights = (state, action) => {
    return updateObject(state, {
      flights:action.flights,
      error: null,
      loading: false,
      itookData:true,
    });

};
const filterFlights = (state, journeys) => {

      return updateObject(state, {
        journeys: journeys
      });
};

const selectedTicket = (state, index) => {
    console.log(index);
    if(state.journeys!==null){
    let selectedticket=state.journeys[index];
      return updateObject(state, {
        selectedTicket: selectedticket
      });
     }

};


 const flightsReducer = (state = initialState, action) => {
     switch(action.type){
      case actionTypes.CALL_START:return callStart(state,action);
      case actionTypes.CALL_FAIL: return callFail(state, action);
      case actionTypes.GET_FLIGHTS: return getFlights(state, action);
      case actionTypes.FILTER_FLIGHTS: return filterFlights(state, action.country);
      case actionTypes.SELECTED_TICKET: return selectedTicket(state, action.index);
       default:
           return state;
     }
};

export default flightsReducer;
