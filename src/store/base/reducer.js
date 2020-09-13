import {
  BASE_REQUEST,
  BASE_REQUEST_SUCCESS,
  BASE_REQUEST_FAILURE,
} from './types';

const initialState = {
  data: null,
  loading: false,
  error: '',
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case BASE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BASE_REQUEST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case BASE_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
