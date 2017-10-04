import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import styles from "../components/Styles";
import usernameImg from "../images/sixty_one.png";
export default class MenuButton extends Component {
  static propTypes = {
    text: React.PropTypes.string
  };

  render() {
    return (
      <View style={styles.slideInputWrapper}>
        <Image source={usernameImg} style={styles.slideinLineImg} />
        <Text style={styles.slideLabel}>{this.props.text}</Text>
      </View>
    );
  }
}
