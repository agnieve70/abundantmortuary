import axios from 'axios';
import {
    COLLECTORS_REQUEST,
    COLLECTORS_SUCCESS,
    COLLECTORS_FAIL

} from '../constants/collectorConstants.js';

import { BASE_URL } from '../constants/baseConstant';


/** 
 *  *Return Collectors Names
 */
export const get_collectors_list = () => async (dispatch) => {

    try{
        dispatch({
            type: COLLECTORS_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                'Accept': "application/json",
            }
        };

        const {data} = await axios.get(BASE_URL+'/get-collectors',
        config,
        );

        dispatch({
            type: COLLECTORS_SUCCESS,
            payload:data.data
        });

    }catch(error)
    {
        dispatch({
            type: COLLECTORS_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
} 