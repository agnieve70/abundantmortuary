import {
    COLLECTIONS_REQUEST,
    COLLECTIONS_SUCCESS,
    COLLECTIONS_FAIL,
    
        COLLECTION_SAVE_REQUEST,
    COLLECTION_SAVE_SUCCESS,
    COLLECTION_SAVE_FAIL

} from '../constants/collectionConstants.js';

export const collectionsListReducer = (state = {collections_list:[]}, action) => {
    switch(action.type)
    {
        case COLLECTIONS_REQUEST:
            return {loading: true}

        case COLLECTIONS_SUCCESS:
            return {loading: false, collections_list: action.payload}

        case COLLECTIONS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const collectionSaveReducer = (state = {collection_save:[]}, action) => {
    switch(action.type)
    {
        case COLLECTION_SAVE_REQUEST:
            return {loading: true}

        case COLLECTION_SAVE_SUCCESS:
            return {loading: false, collection_save: action.payload}

        case COLLECTION_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}