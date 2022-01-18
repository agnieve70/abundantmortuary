import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";

import {
  agentNamesReducer,
} from "./reducers/agentReducers";

import {
  collectorsListReducer,
} from "./reducers/collectorReducers";

import {
  collectionsListReducer,
  collectionSaveReducer,
} from "./reducers/collectionReducers";

import {
  planholderListReducer,
  beneficiaryListReducer,
  personalInfoSaveReducer,
  personalInfoUpdateReducer,
  dataSaveReducer,
  getSingleDataReducer,
  dataUpdateReducer,
  beneficiarySaveReducer,
  beneficiaryUpdateReducer,
} from "./reducers/planholderReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister : userRegisterReducer,
  planholderList: planholderListReducer,
  agentNames: agentNamesReducer,
  personalInfoSave:personalInfoSaveReducer,
  personalInfoUpdate:personalInfoUpdateReducer,
  dataSave:dataSaveReducer,
  dataUpdate:dataUpdateReducer,
  beneficiaryList:beneficiaryListReducer,
  beneficiarySave:beneficiarySaveReducer,
  beneficiaryUpdate:beneficiaryUpdateReducer,
  getSingleData:getSingleDataReducer,
  collectorsList:collectorsListReducer,
  collectionsList:collectionsListReducer,
  collectionSave:collectionSaveReducer,
});

const userInfoFromStorage = localStorage.getItem("amUserInfo")
  ? JSON.parse(localStorage.getItem("amUserInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
