import { Platform } from 'react-native';

export const generateFile = media => {
  const { uri } = media;

  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

  return {
    filename,
    uploadUri,
  };
};
