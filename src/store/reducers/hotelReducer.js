import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    hotels: null,
    loading:false,
    error:null,
};

const callStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const callFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    });
};

const getHotels = (state, action) => {
    return updateObject(state, {
      hotels:action.hotels.hotels,
      error: null,
      loading: false,
    });

};




 const hotelReducer = (state = initialState, action) => {
     switch(action.type){
      case actionTypes.CALL_START:return callStart(state,action);
      case actionTypes.CALL_FAIL: return callFail(state, action);
      case actionTypes.GET_HOTELS: return getHotels(state, action);
       default:
           return state;
     }
};

export default hotelReducer;
