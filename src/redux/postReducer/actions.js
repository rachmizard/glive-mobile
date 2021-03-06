import * as navigation from '../../router/rootNavigation';
import { generateFile } from '../../constants/generateFile';
import {
  getPostsCollection,
  getUsersCollection,
  storeMediaToStorage,
} from '../../services/google';
import {
  GET_POSTS,
  GET_MY_POSTS,
  SET_IS_UPLOADING,
  SET_TRANSFERRED,
  GET_MY_MEDIA,
} from './types';
import firestore from '@react-native-firebase/firestore';

const getPosts = payload => ({
  type: GET_POSTS,
  payload,
});

const getPostsByAuthor = payload => ({
  type: GET_MY_POSTS,
  payload,
});

const getPostsMedia = payload => ({
  type: GET_MY_MEDIA,
  payload,
});

const setTransferred = payload => ({
  type: SET_TRANSFERRED,
  payload,
});

const setIsUploading = payload => ({
  type: SET_IS_UPLOADING,
  payload,
});

export const getPostAsync = query => {
  return dispatch => {
    getPostsCollection()
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        async function findAnAuthor(document) {
          const post = document.data();

          const findAuthor = await getUsersCollection().doc(post.author).get();

          return {
            ...post,
            author: findAuthor.data(),
          };
        }

        Promise.all(querySnapshot.docs.map(findAnAuthor)).then(res =>
          dispatch(getPosts(res)),
        );
      });
  };
};

export const getPostByAuthorAsync = () => {
  return (dispatch, getState) => {
    const authReducer = getState().authReducer;

    getPostsCollection()
      .where('author', '==', authReducer.user.email)
      .get()
      .then(querySnapshot => {
        async function findAnAuthor(document) {
          const post = document.data();

          const findAuthor = await getUsersCollection().doc(post.author).get();

          return {
            ...post,
            author: findAuthor.data(),
          };
        }

        Promise.all(querySnapshot.docs.map(findAnAuthor)).then(res =>
          dispatch(getPostsByAuthor(res)),
        );
      });
  };
};

export const getPostMediaAuthorAsync = () => {
  return (dispatch, getState) => {
    const authReducer = getState().authReducer;
    getPostsCollection()
      .where('author', '==', authReducer.user.email)
      .get()
      .then(querySnapshot => {
        async function findAnAuthor(document) {
          const post = document.data();

          const findAuthor = await getUsersCollection().doc(post.author).get();

          return {
            ...post,
            author: findAuthor.data(),
          };
        }

        Promise.all(querySnapshot.docs.map(findAnAuthor)).then(res => {
          const filterMedia = res.filter(media => media.media.length > 0);

          dispatch(getPostsMedia(filterMedia));
        });
      });
  };
};

export const createPostAsync = payload => {
  return (dispatch, getState) => {
    const { postReducer, authReducer } = getState();

    dispatch(setIsUploading(true));
    dispatch(setTransferred(0.5));

    navigation.replace('MainScreen', { screen: 'Home' });

    async function getUrlAfterUploaded(media) {
      const { filename, uploadUri } = generateFile(media);

      const task = storeMediaToStorage(filename).putFile(uploadUri);

      task.on('state_changed', snapshot => {
        dispatch(
          setTransferred(snapshot.bytesTransferred / snapshot.totalBytes),
        );
      });

      try {
        await task;
      } catch (e) {
        console.error(e);
      }

      dispatch(setIsUploading(false));

      const url = await storeMediaToStorage(filename).getDownloadURL();

      return {
        mediaUrl: url,
        mediaType: media.type,
        mediaRatio: null,
      };
    }

    Promise.all(payload.media.map(getUrlAfterUploaded)).then(res => {
      const author = authReducer.user.email;

      const body = {
        ...postReducer.formData,
        ...payload,
        author: author,
        media: [...res],
        createdAt: firestore.Timestamp.now(),
        updatedAt: firestore.Timestamp.now(),
      };

      getPostsCollection()
        .add(body)
        .then(() => dispatch(setIsUploading(false)))
        .catch(() => dispatch(setIsUploading(false)));
    });
  };
};
