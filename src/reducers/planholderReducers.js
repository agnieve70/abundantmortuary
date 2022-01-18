
import {
    PERSONAL_INFO_SAVE_REQUEST,
    PERSONAL_INFO_SAVE_SUCCESS,
    PERSONAL_INFO_SAVE_FAIL,

    PERSONAL_INFO_UPDATE_REQUEST,
    PERSONAL_INFO_UPDATE_SUCCESS,
    PERSONAL_INFO_UPDATE_FAIL,

    DATA_SAVE_REQUEST,
    DATA_SAVE_SUCCESS,
    DATA_SAVE_FAIL,

    DATA_SINGLE_REQUEST,
    DATA_SINGLE_SUCCESS,
    DATA_SINGLE_FAIL,

    DATA_UPDATE_REQUEST,
    DATA_UPDATE_SUCCESS,
    DATA_UPDATE_FAIL,

    BENEFICIARY_SAVE_REQUEST,
    BENEFICIARY_SAVE_SUCCESS,
    BENEFICIARY_SAVE_FAIL,

    BENEFICIARY_UPDATE_REQUEST,
    BENEFICIARY_UPDATE_SUCCESS,
    BENEFICIARY_UPDATE_FAIL,

    PLANHOLDERS_REQUEST,
    PLANHOLDERS_SUCCESS,
    PLANHOLDERS_FAIL,

    BENEFICIARY_LIST_REQUEST,
    BENEFICIARY_LIST_SUCCESS,
    BENEFICIARY_LIST_FAIL,

} from '../constants/planholderConstants.js'

export const planholderListReducer = (state = {planholders:[]}, action) => {
    switch(action.type)
    {
        case PLANHOLDERS_REQUEST:
            return {loading: true}

        case PLANHOLDERS_SUCCESS:
            return {loading: false, planholders: action.payload}

        case PLANHOLDERS_FAIL:
            return {loading: false, error: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const getSingleDataReducer = (state = {single_data:[]}, action) => {
    switch(action.type)
    {
        case DATA_SINGLE_REQUEST:
            return {loading: true}

        case DATA_SINGLE_SUCCESS:
            return {loading: false, single_data: action.payload}

        case DATA_SINGLE_FAIL:
            return {loading: false, error: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const beneficiaryListReducer = (state = {beneficiaries:[]}, action) => {
    switch(action.type)
    {
        case BENEFICIARY_LIST_REQUEST:
            return {loading: true}

        case BENEFICIARY_LIST_SUCCESS:
            return {loading: false, beneficiaries: action.payload}

        case BENEFICIARY_LIST_FAIL:
            return {loading: false, error: action.payload} 
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const personalInfoSaveReducer = (state = {personal_info_res:[]}, action) => {
    switch(action.type)
    {
        case PERSONAL_INFO_SAVE_REQUEST:
            return {loading: true}

        case PERSONAL_INFO_SAVE_SUCCESS:
            return {loading: false, personal_info_res: action.payload}

        case PERSONAL_INFO_SAVE_FAIL:
            return {loading: false, personal_info_res: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const personalInfoUpdateReducer = (state = {personal_info_update:[]}, action) => {
    switch(action.type)
    {
        case PERSONAL_INFO_UPDATE_REQUEST:
            return {loading: true}

        case PERSONAL_INFO_UPDATE_SUCCESS:
            return {loading: false, personal_info_update: action.payload}

        case PERSONAL_INFO_UPDATE_FAIL:
            return {loading: false, personal_info_update: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const dataSaveReducer = (state = {data_res:[]}, action) => {
    switch(action.type)
    {
        case DATA_SAVE_REQUEST:
            return {loading: true}

        case DATA_SAVE_SUCCESS:
            return {loading: false, data_res: action.payload}

        case DATA_SAVE_FAIL:
            return {loading: false, data_res: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const dataUpdateReducer = (state = {data_update:[]}, action) => {
    switch(action.type)
    {
        case DATA_UPDATE_REQUEST:
            return {loading: true}

        case DATA_UPDATE_SUCCESS:
            return {loading: false, data_update: action.payload}

        case DATA_UPDATE_FAIL:
            return {loading: false, data_update: action.payload}
        
        // case USER_LOGOUT:
        //     return {}
        default:
            return state
    }
}

export const beneficiarySaveReducer = (state = {beneficiary_res:[]}, action) => {
    switch(action.type)
    {
        case BENEFICIARY_SAVE_REQUEST:
            return {loading: true}

        case BENEFICIARY_SAVE_SUCCESS:
            return {loading: false, beneficiary_res: action.payload}

        case BENEFICIARY_SAVE_FAIL:
            return {loading: false, beneficiary_res: action.payload}
        default:
            return state
    }
}

export const beneficiaryUpdateReducer = (state = {beneficiary_update:[]}, action) => {
    switch(action.type)
    {
        case BENEFICIARY_UPDATE_REQUEST:
            return {loading: true}

        case BENEFICIARY_UPDATE_SUCCESS:
            return {loading: false, beneficiary_update: action.payload}

        case BENEFICIARY_UPDATE_FAIL:
            return {loading: false, beneficiary_update: action.payload}
        default:
            return state
    }
}