import StorybookUI from './storybook';
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent('StorybookUI', () => StorybookUI);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'StorybookUI',
    title: 'StorybookUI',
    navigatorStyle: {
      navBarHidden: true
    }
  },
});
