import React, { Component } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import FadeMenuButton from "../core_components/FadeMenuButton";
import styles from "../components/Styles";

export default class CustomToolbar extends Component {
  static propTypes = {
    backImgSource: React.PropTypes.any,
    logoSource: React.PropTypes.any,
    callIcon: React.PropTypes.any,
    headerText: React.PropTypes.string,
    onMenuPress: React.PropTypes.func,
    onCallPress: React.PropTypes.func
  };
  onMenuPress = () => {
    this.props.onMenuPress();
  };

  onCallPress = () => {
    this.props.onCallPress();
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerSubContainer}>

          <TouchableOpacity onMenuPress={this.onMenuPress}>
            <Image
              style={styles.menuImgBtn}
              source={this.props.backImgSource} 
            />
          </TouchableOpacity>

          <Image style={styles.logoImg} source={this.props.logoSource} />

          <TouchableOpacity onCallPress={this.onCallPress}>
            <Image style={styles.callImg} 
            source={this.props.callIcon} />
          </TouchableOpacity>

        </View>

        <View style={styles.headerTxt}>
          <Text style={styles.postBtnTxt}>{this.props.headerText}</Text>
        </View>
      </View>
    );
  }
}
