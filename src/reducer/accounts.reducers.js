import {
  LOAD_ACCOUNTS_SUCCESS,
  LOAD_ACCOUNTS_REQUEST,
  LOAD_ACCOUNTS_FAILURE
} from "../utils/Constant.js";


const accountsReducer = (
  state = {
    accountResults: [],
    loading: true,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case LOAD_ACCOUNTS_SUCCESS:
      return Object.assign({}, state, {
        accountResults: action.accountinfo,
        status: action.status,
        loading: false,
      });
      case LOAD_ACCOUNTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case LOAD_ACCOUNTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true,
      });
      default:
      return state;
}
};

export default accountsReducer;
