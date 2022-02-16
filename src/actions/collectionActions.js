import axios from 'axios';
import {
    COLLECTIONS_REQUEST,
    COLLECTIONS_SUCCESS,
    COLLECTIONS_FAIL,

    COLLECTION_SAVE_REQUEST,
    COLLECTION_SAVE_SUCCESS,
    COLLECTION_SAVE_FAIL

} from '../constants/collectionConstants.js';

import { BASE_URL } from '../constants/baseConstant';
import { USER_TOKEN } from '../constants/tokenConstant';

/** 
 *  *Return Collectors Names
 */
export const get_collection_by_planholder = (planholder_id) => async (dispatch) => {

    try{
        dispatch({
            type: COLLECTIONS_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                'Accept': "application/json",
                'Authorization': USER_TOKEN,
            }
        };

        const {data} = await axios.get(BASE_URL+'/get-collect-by-planholder/'+planholder_id,
        config,
        );

        dispatch({
            type: COLLECTIONS_SUCCESS,
            payload:data.data
        });

    }catch(error)
    {
        dispatch({
            type: COLLECTIONS_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
} 

export const save_collection = (collectionInfo) => async (dispatch) => {
    
    try{
        dispatch({
            type: COLLECTION_SAVE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.post(BASE_URL+'/add-collect',
        collectionInfo,
        config,
        );

        dispatch({
            type: COLLECTION_SAVE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: COLLECTION_SAVE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}