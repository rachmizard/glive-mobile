import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';
import color from './../color';
import fontConfig from './../font-config';

export default {
  ...PaperDefaultTheme,
  roundness: 8,
  colors: {
    ...PaperDefaultTheme,
    ...color,
  },
  fonts: configureFonts(fontConfig.fontDefault),
};
