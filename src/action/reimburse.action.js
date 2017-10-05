import {REIMBURSE_DETAILS_DATA_SUCCESS, REIMBURSE_DETAILS_DATA_REQUEST, REIMBURSE_DETAILS_DATA_FAILED, REIMBURSE_DETAILS_GET_PARAMETER } from "../utils/Constant";
export const REQUESTING = "requesting";
export const SUCCESS = "success";
export const ERROR = "error";

export function loadInfoRequest() {
  return {
    type: REIMBURSE_DETAILS_DATA_REQUEST,
    status: REQUESTING
  };
}

export function loadInfoSuccess(reimburseDetailInfo) {
  return {
    type: REIMBURSE_DETAILS_DATA_SUCCESS,
    status: SUCCESS,
    reimburseDetailInfo
  };
}

export function loadInfoFailure(errorMsg) {
  return {
    type: REIMBURSE_DETAILS_DATA_FAILED,
    error: errorMsg
  };
}

export function fetchReimburseDetailInfo(){
  return async (dispatch, getState, api ) => {
    dispatch(loadInfoRequest());
    try {
      const result = await api.get(REIMBURSE_DETAILS_GET_PARAMETER);
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
