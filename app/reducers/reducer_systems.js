import { FETCH_BIKE_SYSTEMS } from '../actions/index'
import { SYSTEM_SELECTED } from '../actions/index'

const INITIAL_STATE = {
  all: [],
  selected: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BIKE_SYSTEMS:
      return { ...state, all: action.payload.data };
    case SYSTEM_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
