import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import rootReducer from './rootReducers';

const storage = {
  setItem: (key, value) => {
    MMKV.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = MMKV.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    MMKV.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authReducer'],
};

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
