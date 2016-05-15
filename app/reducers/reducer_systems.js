import { FETCH_BIKE_SYSTEMS } from '../actions/index'
import { FETCH_BIKE_SYSTEM } from '../actions/index'
import { FETCH_STATIONS } from '../actions/index'
import { SYSTEM_SELECTED } from '../actions/index'

const INITIAL_STATE = {
  all: [],
  selected: null,
  stations: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BIKE_SYSTEMS:
      return { ...state, all: action.payload.data };
    case SYSTEM_SELECTED:
      return { ...state, selected: action.payload };
    case FETCH_BIKE_SYSTEM:
      return { ...state, selected: action.payload.data }; 
    case FETCH_STATIONS:
      return { ...state, stations: action.payload.data }; 
    default:
      return state;
  }
}
