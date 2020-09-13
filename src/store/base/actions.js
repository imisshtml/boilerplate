import {
  BASE_REQUEST,
  BASE_REQUEST_SUCCESS,
  BASE_REQUEST_FAILURE,
} from './types';

export const fetchBase = (data) => ({
  type: BASE_REQUEST,
  payload: {data},
});

export const fetchBaseuccess = (data) => ({
  type: BASE_REQUEST_SUCCESS,
  payload: data,
});

export const fetchBaseFailure = (error) => ({
  type: BASE_REQUEST_FAILURE,
  payload: {error},
});
