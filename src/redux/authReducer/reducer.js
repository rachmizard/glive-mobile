import {
  SET_LOGIN,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
  SET_CLOSE_ERROR,
  SET_LOADING_AUTH,
  SET_STOP_LOADING_AUTH,
  SET_REGISTER,
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
    profileImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/app-glive.appspot.com/o/user.png?alt=media&token=215c0ab8-f88a-4425-bdc4-035e3b2f2516',
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
    profileImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/app-glive.appspot.com/o/user.png?alt=media&token=215c0ab8-f88a-4425-bdc4-035e3b2f2516',
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
  switch (action.type) {
    case SET_LOGIN:
    case SET_REGISTER: {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }

    case SET_LOGOUT: {
      return defaultInitialState;
    }

    case SET_LOGIN_ERROR: {
      return {
        ...state,
        errorMessages: action.payload,
        isError: true,
      };
    }

    case SET_CLOSE_ERROR: {
      return {
        ...state,
        errorMessages: null,
        isError: false,
      };
    }

    case SET_LOADING_AUTH: {
      return { ...state, isLoading: true };
    }

    case SET_STOP_LOADING_AUTH: {
      return { ...state, isLoading: false };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
