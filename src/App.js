import React, { Component } from "react";
import SldeMenu from "../src/core_components/SlideMenu";
import AccountListContainer from "./containers/account/AccountListContainer";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppRegistry, StyleSheet, Text, View } from "react-native";


const projectStack = StackNavigator({
  /* we can change it to  TabNavigator and DrawerNavigator*/
  // Login: { screen: Login },
  Home: { screen: AccountListContainer },

});

// const drawerNavigator = new DrawerNavigator(
//   {
//     /* we can change it to  TabNavigator and DrawerNavigator*/
//     Home: { screen: projectStack }
//   },
//   {
//     drawerPosition: "left",
//     contentComponent: props => <SldeMenu {...props} />
//   }
// );
//export default AppRegistry.registerComponent('projectStack', () => projectStack);
export default projectStack
