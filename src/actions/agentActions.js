import axios from 'axios';
import {
    AGENT_NAMES_REQUEST,
    AGENT_NAMES_SUCCESS,
    AGENT_NAMES_FAIL

} from '../constants/agentConstants.js';

import { BASE_URL } from '../constants/baseConstant';


/** 
 *  *Return Agent Names
 */
export const agent_names_list = () => async (dispatch) => {

    try{
        dispatch({
            type: AGENT_NAMES_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                'Accept': "application/json",
            }
        };

        const {data} = await axios.get(BASE_URL+'/get-agents-name',
        config,
        );

        dispatch({
            type: AGENT_NAMES_SUCCESS,
            payload:data.data
        });

    }catch(error)
    {
        dispatch({
            type: AGENT_NAMES_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
} 