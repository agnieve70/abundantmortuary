import axios from "axios";
import {
  REPORTS_LIST_REQUEST,
  REPORTS_LIST_SUCCESS,
  REPORTS_LIST_FAIL,
} from "../constants/reportConstants";

import { BASE_URL } from "../constants/baseConstant";
import { USER_TOKEN } from "../constants/tokenConstant";
/**
 *  *Return Collectors Names
 */
export const get_collectors_list = (dates) => async (dispatch) => {
  try {
    dispatch({
      type: REPORTS_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: USER_TOKEN,
      },
    };

    const { data } = await axios.post(BASE_URL + "/get-collect-filtered", dates, config);

    dispatch({
      type: REPORTS_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: REPORTS_LIST_FAIL,
      payload: error.response ? error.response.data.detail : error.message,
    });
  }
};
