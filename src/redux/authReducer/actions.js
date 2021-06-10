import {
  SET_CLOSE_ERROR,
  SET_LOADING_AUTH,
  SET_LOGIN,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
  SET_STOP_LOADING_AUTH,
} from './types';
import { GoogleSignin } from '../../services/google';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { navigate } from '../../router/rootNavigation';

export const login = payload => ({
  type: SET_LOGIN,
  payload,
});

export const startLoading = () => ({
  type: SET_LOADING_AUTH,
});

export const stopLoading = () => ({
  type: SET_STOP_LOADING_AUTH,
});

export const errorAuth = message => ({
  type: SET_LOGIN_ERROR,
  payload: message,
});

export const clearErrorAuth = () => ({
  type: SET_CLOSE_ERROR,
});

export const logout = () => ({
  type: SET_LOGOUT,
});

export const loginAsync = (email, password) => {
  return dispatch => {
    dispatch(startLoading());
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('Success', data.additionalUserInfo.profile);
        dispatch(stopLoading());
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(errorAuth('That email address is already in use!'));
        }
        if (error.code === 'auth/invalid-email') {
          dispatch(errorAuth('That email address is invalid!'));
        }
        if (error.code === 'auth/user-not-found') {
          dispatch(errorAuth('No user was found!'));
        }
        dispatch(stopLoading());
      });
  };
};

export const loginGoogleAsync = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const usersCollection = firestore().collection('Users');
    const { authReducer } = getState();

    return auth()
      .signInWithCredential(googleCredential)
      .then(data => {
        const { email, displayName, photoURL } = data.user;

        const payload = {
          ...authReducer.user,
          email,
          name: displayName,
          googleAccount: displayName,
          profileImageUrl: photoURL,
        };

        dispatch(login(payload));
        dispatch(stopLoading());

        usersCollection
          .doc(email)
          .get()
          .then(document => {
            if (document.exists) {
              navigate('MainScreen', { screen: 'Home' });
            } else {
              usersCollection
                .doc(email)
                .set(payload)
                .then(() => {
                  navigate('SocialOnBoarding');
                });
            }
          });
      })
      .catch(err => console.log(err));
  };
};

export const logoutSocialAsync = () => {
  return dispatch => {
    auth()
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .then(() => navigate('SignIn'))
      .catch(err => console.log(err));
  };
};
