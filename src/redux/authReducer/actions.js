import {
  SET_CLOSE_ERROR,
  SET_LOADING_AUTH,
  SET_LOGIN,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
  SET_STOP_LOADING_AUTH,
  SET_REGISTER,
} from './types';
import {
  getUsersCollection,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signUpUserWithEmailAndPassword,
  signInOut,
} from '../../services/google';
import * as navigation from '../../router/rootNavigation';

export const login = payload => ({
  type: SET_LOGIN,
  payload,
});

export const register = payload => ({
  type: SET_REGISTER,
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

    signInWithEmailAndPassword(email, password)
      .then(data => {
        getUsersCollection()
          .doc(data.user.email)
          .get()
          .then(document => {
            dispatch(login(document.data()));
            dispatch(stopLoading());
            navigation.replace('MainScreen', { screen: 'Home' });
          })
          .catch(err => {
            dispatch(errorAuth('Query not found!'));
            console.log(err);
          });
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
        if (error.code === 'auth/wrong-password') {
          dispatch(
            errorAuth(
              'The password is invalid or the user does not have a password',
            ),
          );
        }
        if (error.code === 'auth/too-many-requests') {
          dispatch(
            errorAuth(
              'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
            ),
          );
        }
        dispatch(stopLoading());
      });
  };
};

export const loginGoogleAsync = () => {
  return (dispatch, getState) => {
    const { authReducer } = getState();

    dispatch(startLoading());

    signInWithGoogle()
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

        getUsersCollection()
          .doc(email)
          .get()
          .then(document => {
            if (document.exists) {
              navigation.replace('MainScreen', { screen: 'Home' });
            } else {
              getUsersCollection()
                .doc(email)
                .set(payload)
                .then(() => {
                  navigation.navigate('SocialOnBoarding');
                });
            }
          });
      })
      .catch(err => {
        dispatch(errorAuth(err.message));
        dispatch(stopLoading());
      });
  };
};

export const registerAsync = (name, userName, email, password) => {
  return (dispatch, getState) => {
    const { authReducer } = getState();
    dispatch(startLoading());

    const payload = {
      ...authReducer.user,
      name,
      userName,
      email,
      password,
    };

    dispatch(register(payload));
    signUpUserWithEmailAndPassword(email, password)
      .then(() => {
        getUsersCollection
          .doc(email)
          .set(payload)
          .then(() => {
            dispatch(stopLoading());
            navigation.navigate('SuccessSignUp');
          });
      })
      .catch(error => {
        dispatch(stopLoading());

        if (error.code === 'auth/email-already-in-use') {
          dispatch(errorAuth('That email address is already in use!'));
        }
        if (error.code === 'auth/invalid-email') {
          dispatch(errorAuth('That email address is invalid!'));
        }
      });
  };
};

export const registSocialOnBoarding = (name, userName) => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    const { authReducer } = getState();

    const payload = {
      ...authReducer.user,
      name,
      userName,
    };

    getUsersCollection()
      .doc(authReducer.user.email)
      .get()
      .then(doc => {
        dispatch(stopLoading());

        if (!doc.exists) {
          dispatch(errorAuth('User not found!'));
        } else {
          getUsersCollection()
            .doc(authReducer.user.email)
            .update(payload)
            .then(res => {
              dispatch(login(payload));
              navigation.navigate('SuccessSignUp');
            })
            .catch(err => dispatch(errorAuth(err.message)));
        }
      })
      .catch(err => dispatch(errorAuth(err.message)));
  };
};

export const logoutSocialAsync = () => {
  return dispatch => {
    signInOut()
      .then(() => {
        dispatch(logout());
      })
      .then(() => navigation.replace('Auth', { screen: 'SignIn' }))
      .catch(err => dispatch(errorAuth(err.message)));
  };
};
