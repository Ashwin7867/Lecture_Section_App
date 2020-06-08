import {SET_FILTER} from '../actionTypes';
import {VISIBILITY_FILTERS} from '../constants';

const initialstate = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialstate, action) => {
    switch(action.type){
        case SET_FILTER: {
            return action.payload.filter
        }
        default:
            return state
    }
}

export default visibilityFilter;