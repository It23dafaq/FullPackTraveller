import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    flghts: null,
    loading:false,
    error:null,
    itookData:false,
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
      flghts:action.flights,
      error: null,
      loading: false,
      itookData:true,
    });
    this.props.history.push({
     pathname: "/SearchResults"
   });
};




 const flightsReducer = (state = initialState, action) => {
     switch(action.type){
      case actionTypes.CALL_START:return callStart(state,action);
      case actionTypes.CALL_FAIL: return callFail(state, action);
      case actionTypes.GET_FLIGHTS: return getFlights(state, action);
       default:
           return state;
     }
};

export default flightsReducer;
