import * as navigation from '../../router/rootNavigation';
import { generateFile } from '../../constants/generateFile';
import {
  getPostsCollection,
  getUsersCollection,
  storeMediaToStorage,
} from '../../services/google';
import { GET_POSTS, SET_IS_UPLOADING, SET_TRANSFERRED } from './types';
import firestore from '@react-native-firebase/firestore';

const getPosts = payload => ({
  type: GET_POSTS,
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

export const getPostAsync = () => {
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
        .catch(err => dispatch(setIsUploading(false)));
    });
  };
};
