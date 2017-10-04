import React, { Component } from "react";
import FadeMenuButton from "./FadeMenuButton.js";

const possibleColors = ["#FABADA", "#D00000"];

export default class ColorChangeButton extends Component {
  constructor(props) {
    this.state = {
      currentColor: 0
    };
  }
  onPress = () => {
    this.setState({ currentColor: 0 ? 1 : 0 });
  };

  render() {
    return (
      <FadeMenuButton
        {...this.props}
        underlayColor={possibleColors[this.state.currentColor]}
      />
    );
  }
}
