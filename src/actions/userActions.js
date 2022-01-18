import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../constants/userConstants';

import { BASE_URL } from '../constants/baseConstant';


export const login = (email, password) => async (dispatch) => {
    try{

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type':'application/json'
            }
        }
        
        const {data} = await axios.post(BASE_URL+'/login',
        {'email':email, 'password':password},
        config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })

        if(data.status !== false)
        {
            localStorage.setItem('amUserInfo', JSON.stringify(data))
        }

    }catch(error)
    {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}

export const register = (name, email, contact, gender, birthdate, password, password_confirmation, role_id) => async (dispatch) => {
    try{

        dispatch({
            type: USER_REGISTER_REQUEST
        });

        const config = {
            headers: {
                'Content-type':'application/json',
                "Accept": "application/json",
            }
        };
        
        const {data} = await axios.post(BASE_URL+'/register',
        {
            'name':name, 'email':name,
            'email':email,
            'contact':contact,
            'gender': gender,
            'birthdate': birthdate,
            'password':password,
            'password_confirmation': password_confirmation,
            'role_id': role_id
        },
        config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload:data
        })

    }catch(error)
    {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}