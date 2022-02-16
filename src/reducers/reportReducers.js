import {
  REPORTS_LIST_REQUEST,
  REPORTS_LIST_SUCCESS,
  REPORTS_LIST_FAIL,
} from "../constants/reportConstants";

export const reportsFilteredReducer = (state = { reports_filtered: [] }, action) => {
  switch (action.type) {
    case REPORTS_LIST_REQUEST:
      return { loading: true };

    case REPORTS_LIST_SUCCESS:
      return { loading: false, reports_filtered: action.payload };

    case REPORTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
