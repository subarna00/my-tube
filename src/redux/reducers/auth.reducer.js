import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("access-token") || null,
  user: sessionStorage.getItem("users") || null,
  loading: false,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return state;
  }
  return state;
};
