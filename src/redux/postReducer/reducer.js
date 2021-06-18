import {
  CREATE_POST,
  GET_POSTS,
  SET_IS_UPLOADING,
  SET_TRANSFERRED,
} from './types';

const intialState = {
  isUploading: false,
  transferred: 0,
  posts: [],
  formData: {
    caption: null,
    tags: [],
    game: [],
    mentions: [],
    media: [],
    author: null,
    division: null,
    postParent: null,
    likersCount: 0,
    replyCount: 0,
    repostCount: 0,
  },
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case CREATE_POST:
      return {
        ...state,
        formData: action.payload,
      };

    case SET_TRANSFERRED:
      return {
        ...state,
        transferred: action.payload,
      };

    case SET_IS_UPLOADING:
      return {
        ...state,
        isUploading: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
