import React, { Component } from "react";
import Dimensions from "Dimensions";
import { StackNavigator } from "react-navigation";
import usernameImg from "../images/sixty_one.png";
import logoImg from "../images/hamburger.png";
import backImg from "../images/backImg.png";

import styles from "../components/Styles";
import FadeMenuButton from "../core_components/FadeMenuButton";
import MenuButton from "../core_components/MenuButton";

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  TextInput,
  DrawerLayoutAndroid,
  navigationView,
  ScrollView,
  View
} from "react-native";

class SlideMenu extends React.Component {
  static navigationOptions = {
    title: "SlideMenu"
  };
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.slideContainer}>
        <ScrollView>
          <FadeMenuButton
            onPress={() => {
              navigate("DrawerClose");
            }}
          >
            <Image source={backImg} />
          </FadeMenuButton>
          <View style={styles.slideLeftTop}>
            <Image source={logoImg} />
          </View>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Profile" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="My Bids/Matches" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("MyFleetsPage", {})}>
            <MenuButton text="My Fleet" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Make Trucks UnAvailable" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Trip Accounts" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Past Trips" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Driver Rights" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("MenuBar", {})}>
            <MenuButton text="Notifications" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("MenuBar", {})}>
            <MenuButton text="Reset Password" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Set/Reset Tpin" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Control Dashboard" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Statement Of Account" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Add Truck" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Add Driver" />
          </FadeMenuButton>

          <FadeMenuButton onPress={() => navigate("profile", {})}>
            <MenuButton text="Logout" />
          </FadeMenuButton>
        </ScrollView>
      </View>
    );
  }
}

export default SlideMenu;
