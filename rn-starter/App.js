import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import componentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import counterScreen from "./src/screens/counterScreen";
import SquareCounter from "./src/screens/SquareCounter";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    listScreen: ListScreen,
    componentScreen : componentScreen,
    imageScreen: ImageScreen,
    counter: counterScreen,
    SquareCounter: SquareCounter

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
