import {Alert} from 'react-native';
import axios from 'axios';
import {endPoints} from '../base-url';
import {MOBILE} from './types';

//Local Types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAILED = 'AUTH_FAILED';

export const mobiles = (params, cbSuccess, cbFailure) => {
  return async dispatch => {
    dispatch(authLoading());
    try {
      const res = await axios.post(endPoints.phones, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res?.data.success === 1) {
        cbSuccess(res.data.data.phones);
        dispatch(mobileSuccess(res.data.data.phones));
      } else if (res?.data.success === 0) {
        cbFailure(res?.data?.data.error);
        dispatch(authFailed(res?.data?.data.error));
      }
    } catch (err) {
      dispatch(authFailed(err));
    }
  };
};

//helper Functions
const authLoading = () => ({
  type: AUTH_LOADING,
});

const authFailed = err => ({
  type: AUTH_FAILED,
  payload: err,
});

const mobileSuccess = res => ({
  type: MOBILE,
  payload: res,
});
