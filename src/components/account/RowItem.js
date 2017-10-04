import React, { Component } from "react";
import accountliststyle from "./AccountListStyle";
import { AppRegistry, Text, View, Image } from "react-native";

class RowItem extends React.Component {
  static propTypes = {
    valueOne: React.PropTypes.number,
    valueTwo: React.PropTypes.string,
    valueThree: React.PropTypes.string,
    valuefour: React.PropTypes.string
  };

  render() {
    return (
      <View>
        {/* below block for truck capacity ,truck dmm and truck truck number */}
        <View style={accountliststyle.itemRow}>
          <Image
            style={accountliststyle.rowImg}
            source={this.props.valueOne}
          />
          <Text style={accountliststyle.texColor}>
            {this.props.valueTwo +
              " " +
              this.props.valueThree +
              " " +
              this.props.valuefour}
          </Text>
        </View>
      </View>
    );
  }
}
export default RowItem;
