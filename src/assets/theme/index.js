import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import color from './../color';
import fontConfig from './../font-config';

export default {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 8,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...color,
  },
  fonts: configureFonts(fontConfig.fontDefault),
};
