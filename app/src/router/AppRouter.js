import { createAppContainer, createStackNavigator } from "react-navigation";
import PaintScreen from "../pages/PaintScreen";
import MainScreen from "../pages/MainScreen";

const AppRouter = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Paint: {
      screen: PaintScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Main",
  }
);

export const AppContainer = createAppContainer(AppRouter);
