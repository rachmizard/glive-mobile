import { SET_LOGIN } from './types';

export const login = payload => ({
  type: SET_LOGIN,
  data: payload,
});

export const loginAsync = data => {
  return dispatch => {
    // TODO: Call API and produces it to store by dispatching async thunk.
    // dispatch(login())
  };
};
