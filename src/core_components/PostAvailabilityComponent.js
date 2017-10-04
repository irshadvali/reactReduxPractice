import React, { Component, PropTypes } from "react";
import { AppRegistry, Text, View, Image } from "react-native";
import styles from "../components/Styles";

class PostAvailabilityComponent extends Component {
  static propTypes = {
    btnText: PropTypes.string
  };

  render() {
    return (
      <View style={styles.postButton}>
        <Text style={styles.postBtnTxt}>{this.props.btnText}</Text>
      </View>
    );
  }
}
export default PostAvailabilityComponent;
