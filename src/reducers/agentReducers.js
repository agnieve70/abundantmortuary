import {
    AGENT_NAMES_REQUEST,
    AGENT_NAMES_SUCCESS,
    AGENT_NAMES_FAIL

} from '../constants/agentConstants.js';

export const agentNamesReducer = (state = {agent_names:[]}, action) => {
    switch(action.type)
    {
        case AGENT_NAMES_REQUEST:
            return {loading: true}

        case AGENT_NAMES_SUCCESS:
            return {loading: false, agent_names: action.payload}

        case AGENT_NAMES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}