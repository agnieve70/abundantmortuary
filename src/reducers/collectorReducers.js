import {
    COLLECTORS_REQUEST,
    COLLECTORS_SUCCESS,
    COLLECTORS_FAIL

} from '../constants/collectorConstants.js';

export const collectorsListReducer = (state = {collectors_list:[]}, action) => {
    switch(action.type)
    {
        case COLLECTORS_REQUEST:
            return {loading: true}

        case COLLECTORS_SUCCESS:
            return {loading: false, collectors_list: action.payload}

        case COLLECTORS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}