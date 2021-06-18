import { generateFile } from '../../constants/generateFile';
import { getPostsCollection, storeMediaToStorage } from '../../services/google';
import {
  CREATE_POST,
  GET_POSTS,
  SET_IS_UPLOADING,
  SET_TRANSFERRED,
} from './types';

const createPost = payload => ({
  type: CREATE_POST,
  payload,
});

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

export const createPostAsync = payload => {
  return (dispatch, getState) => {
    const { postReducer } = getState();

    dispatch(setIsUploading(true));
    dispatch(setTransferred(0));

    async function getUrlAfterUploaded(media) {
      const { filename, uploadUri } = generateFile(media);

      const task = storeMediaToStorage(filename).putFile(uploadUri);

      task.on('state_changed', snapshot => {
        dispatch(
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes),
          ),
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
      const body = {
        ...postReducer.formData,
        ...payload,
        media: [...res],
      };

      getPostsCollection()
        .add(body)
        .then(res => console.log('SUCCESS!!', res));
    });
  };
};
