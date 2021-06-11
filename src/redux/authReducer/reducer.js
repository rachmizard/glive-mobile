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
      'https://firebasestorage.googleapis.com/v0/b/app-glive.appspot.com/o/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png?alt=media&token=1fe2eb1f-4756-40b0-97f3-7cc2ad08a6b5',
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
      'https://firebasestorage.googleapis.com/v0/b/app-glive.appspot.com/o/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png?alt=media&token=1fe2eb1f-4756-40b0-97f3-7cc2ad08a6b5',
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
