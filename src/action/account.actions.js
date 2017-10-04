import {LOAD_ACCOUNTS_SUCCESS, LOAD_ACCOUNTS_REQUEST, LOAD_ACCOUNTS_FAILURE, ACCOUNTS_GET_PARAMETER } from "../utils/Constant";
export const REQUESTING = "requesting";
export const SUCCESS = "success";
export const ERROR = "error";

export function loadInfoRequest() {
  return {
    type: LOAD_ACCOUNTS_REQUEST,
    status: REQUESTING
  };
}

export function loadInfoSuccess(accountinfo) {
  return {
    type: LOAD_ACCOUNTS_SUCCESS,
    status: SUCCESS,
    accountinfo
  };
}

export function loadInfoFailure(errorMsg) {
  return {
    type: LOAD_ACCOUNTS_FAILURE,
    error: errorMsg
  };
}

export function fetchAccountListInfo(){
  return async (dispatch, getState, api ) => {
    dispatch(loadInfoRequest());
    try {
      const result = await api.get(ACCOUNTS_GET_PARAMETER);
      const resultJson = await result.json();
      if (resultJson.success === false) {
        throw new Error(resultJson.message);
      }
      dispatch(loadInfoSuccess(resultJson.results));
    } catch (e) {
      dispatch(loadInfoFailure(e.message));
    }
  };
};
