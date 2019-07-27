/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/Home';
import ArticleDetails from './components/ArticleDetails';

const AppNavigator = 
createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: ArticleDetails
  }
});

export default createAppContainer(AppNavigator);