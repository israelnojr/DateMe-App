<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import SideBarScreen from "./screens/sidebar";
import DateMeScreen from "./screens/DateMe";

const Drawer = createDrawerNavigator(
    {
      Login: { screen: LoginScreen },
      Home: { screen: HomeScreen },
      DateMe: { screen: DateMeScreen },
    },
    {
      initialRouteName: "Home",
      contentOptions: {
      activeTintColor: "#e91e63"
      },
      contentComponent: SideBarScreen
    }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  props: {
    navigation: {
      type: Object
    }
  },
   components: { 
       Root, 
       AppNavigation, 
    }
}
</script>
