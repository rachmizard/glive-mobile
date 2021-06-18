import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { utils } from '@react-native-firebase/app';

GoogleSignin.configure({
  webClientId:
    '698183645681-50ngj8q5n5e13ass4h8rubo5rrq4kvot.apps.googleusercontent.com',
});

export const getUsersCollection = () => firestore().collection('Users');

export const getPostsCollection = () => firestore().collection('Posts');

export const signInWithEmailAndPassword = (email, password) => {
  return auth().signInWithEmailAndPassword(email.toLowerCase(), password);
};

export const signInWithGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};

export const signUpUserWithEmailAndPassword = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const sendPasswordResetEmail = (email, actionCodeSettings = null) => {
  return auth().sendPasswordResetEmail(email, actionCodeSettings);
};

export const storeMediaToStorage = filename => {
  return storage().ref(filename);
};

export const storePostCollection = (collection, body = {}) => {
  return firestore().collection(collection).add(body);
};

export const signInOut = () => {
  return auth().signOut();
};
