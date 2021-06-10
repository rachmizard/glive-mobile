import {
  SET_LOGIN,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
  SET_CLOSE_ERROR,
  SET_LOADING_AUTH,
  SET_STOP_LOADING_AUTH,
} from './types';

const authInitialState = {
  token: '',
  auth: {},
  user: {
    email: null,
    password: null,
    name: null,
    userName: null,
    discordAccount: null,
    googleAccount: null,
    facebookAccount: null,
    profileImageUrl: null,
    backgroundImageUrl: null,
    postCount: 0,
    divisionCount: 0,
    friendsCount: 0,
    likersCount: 0,
    accountType: 'public',
  },
  isLoggedIn: false,
  errorMessages: null,
  isError: false,
  isLoading: false,
};

const defaultInitialState = {
  token: '',
  auth: {},
  user: {
    email: null,
    password: null,
    name: null,
    userName: null,
    discordAccount: null,
    googleAccount: null,
    facebookAccount: null,
    profileImageUrl: null,
    backgroundImageUrl: null,
    postCount: 0,
    divisionCount: 0,
    friendsCount: 0,
    likersCount: 0,
    accountType: 'public',
  },
  isLoggedIn: false,
  errorMessages: null,
  isError: false,
  isLoading: false,
};

const authReducer = (state = authInitialState, action) => {
  if (action.type === SET_LOGIN) {
    return {
      ...state,
      user: action.payload,
      isLoggedIn: true,
    };
  } else if (action.type === SET_LOGOUT) {
    return {
      ...state,
      defaultInitialState,
    };
  } else if (action.type === SET_LOGIN_ERROR) {
    return {
      ...state,
      errorMessages: action.payload,
      isError: true,
    };
  } else if (action.type === SET_CLOSE_ERROR) {
    return {
      ...state,
      errorMessages: null,
      isError: false,
    };
  } else if (action.type === SET_LOADING_AUTH) {
    return { ...state, isLoading: true };
  } else if (action.type === SET_STOP_LOADING_AUTH) {
    return { ...state, isLoading: false };
  }
  return state;
};

export default authReducer;
