import axios from 'axios';
import {
    PLANHOLDERS_REQUEST,
    PLANHOLDERS_SUCCESS,
    PLANHOLDERS_FAIL,

    PERSONAL_INFO_SAVE_REQUEST,
    PERSONAL_INFO_SAVE_SUCCESS,
    PERSONAL_INFO_SAVE_FAIL,

    PERSONAL_INFO_UPDATE_REQUEST,
    PERSONAL_INFO_UPDATE_SUCCESS,
    PERSONAL_INFO_UPDATE_FAIL,

    DATA_SAVE_REQUEST,
    DATA_SAVE_SUCCESS,
    DATA_SAVE_FAIL,

    DATA_UPDATE_REQUEST,
    DATA_UPDATE_SUCCESS,
    DATA_UPDATE_FAIL,

    DATA_SINGLE_REQUEST,
    DATA_SINGLE_SUCCESS,
    DATA_SINGLE_FAIL,

    BENEFICIARY_LIST_REQUEST,
    BENEFICIARY_LIST_SUCCESS,
    BENEFICIARY_LIST_FAIL,

    BENEFICIARY_SAVE_REQUEST,
    BENEFICIARY_SAVE_SUCCESS,
    BENEFICIARY_SAVE_FAIL,
    
    BENEFICIARY_UPDATE_REQUEST,
    BENEFICIARY_UPDATE_SUCCESS,
    BENEFICIARY_UPDATE_FAIL,

} from '../constants/planholderConstants.js';

import { BASE_URL } from '../constants/baseConstant';
import { USER_TOKEN } from '../constants/tokenConstant';

/**
 *  * Returns Planholders list
 */
export const planholder_list = () => async (dispatch) => {
    try{

        dispatch({
            type: PLANHOLDERS_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        
        const {data} = await axios.get(BASE_URL+'/get-planholder',
        config
        );

        dispatch({
            type: PLANHOLDERS_SUCCESS,
            payload:data.data
        });
    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: PLANHOLDERS_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const beneficiary_list = (planholder_id) => async (dispatch) => {
    try{

        dispatch({
            type: BENEFICIARY_LIST_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        
        const {data} = await axios.get(BASE_URL+'/get-beneficiaries/'+planholder_id,
        config
        );

        dispatch({
            type: BENEFICIARY_LIST_SUCCESS,
            payload:data.data
        });
    }catch(error)
    {
        dispatch({
            type: BENEFICIARY_LIST_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

/** 
 * * Add Planholder Personal Info using axios to request API
 * @param personalInfo is my object parameter 
 */
export const add_personal_info = (personalInfo) => async (dispatch) => {
    
    try{
        dispatch({
            type: PERSONAL_INFO_SAVE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.post(BASE_URL+'/add-planholder',
        personalInfo,
        config,
        );

        dispatch({
            type: PERSONAL_INFO_SAVE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: PERSONAL_INFO_SAVE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const get_single_data = (planholder_id) => async (dispatch) => {
    
    try{
        dispatch({
            type: DATA_SINGLE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.get(BASE_URL+'/get-single-data/'+planholder_id,
        config,
        );

        dispatch({
            type: DATA_SINGLE_SUCCESS,
            payload:data.data
        });
    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: DATA_SINGLE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const update_personal_info = (personalInfo, planholder_id) => async (dispatch) => {
    
    try{
        dispatch({
            type: PERSONAL_INFO_UPDATE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.put(BASE_URL+'/update-planholder/'+planholder_id,
        personalInfo,
        config,
        );

        dispatch({
            type: PERSONAL_INFO_UPDATE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: PERSONAL_INFO_UPDATE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const add_beneficiary = (beneficiaryInfo) => async (dispatch) => {
    
    try{
        dispatch({
            type: BENEFICIARY_SAVE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.post(BASE_URL+'/add-beneficiary',
        beneficiaryInfo,
        config,
        );

        dispatch({
            type: BENEFICIARY_SAVE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: BENEFICIARY_SAVE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const add_data = (dataInfo) => async (dispatch) => {
    
    try{
        dispatch({
            type: DATA_SAVE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.post(BASE_URL+'/add-data',
        dataInfo,
        config,
        );

        dispatch({
            type: DATA_SAVE_SUCCESS,
            payload:data
        });


    }catch(error)
    {
        dispatch({
            type: DATA_SAVE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const update_data = (dataInfo, data_id) => async (dispatch) => {
    
    try{
        dispatch({
            type: DATA_UPDATE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.put(BASE_URL+'/update-data/'+data_id,
        dataInfo,
        config,
        );

        dispatch({
            type: DATA_UPDATE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        dispatch({
            type: DATA_UPDATE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}

export const update_beneficiary = (beneficiaryInfo, beneficiary_id) => async (dispatch) => {
    
    try{
        dispatch({
            type: BENEFICIARY_UPDATE_REQUEST
        });
        const config = {
            headers: {
                'Content-type':'application/json',
                Accept: "application/json",
                Authorization: USER_TOKEN,
            }
        };
        const {data} = await axios.put(BASE_URL+'/update-beneficiary/'+beneficiary_id,
        beneficiaryInfo,
        config,
        );

        dispatch({
            type: BENEFICIARY_UPDATE_SUCCESS,
            payload:data
        });

        console.log(data)

    }catch(error)
    {
        console.log(error.response.data.message);
        dispatch({
            type: BENEFICIARY_UPDATE_FAIL,
            payload: error.response
            ? error.response.data.detail
            : error.message,
        });
    }
}