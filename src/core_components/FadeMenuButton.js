import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";

export default class FadeMenuButton extends Component {
  static propTypes = {
    underlayColor: React.PropTypes.string,
    onPress: React.PropTypes.func,
    source: React.PropTypes.any,
    style: React.PropTypes.number
  };

  onPress = () => {
    this.props.onPress();
  };
  render() {
    // if (this.props.children.length > 2) {
    //     throw new Error("blargh");
    // }
    return (
      <TouchableOpacity
        underlayColor={this.props.underlayColor}
        onPress={this.onPress}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
