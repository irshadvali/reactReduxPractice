import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import commonstyle from "./../../core_components/CommonStyle";
import FoodContainerStyle from "./FoodContainerStyle";

class FoodComponent extends React.Component {
      static propTypes = {
     lefttime: React.PropTypes.string,
     membersname: React.PropTypes.string,
  };
  render() {
    return (
      <View style={{ height: 150 }}>
        <View style={FoodContainerStyle.container}>
            <View style={commomStyle.rowDirectionContainer}>
          <View style={commomStyle.leftContainer}>
            <Text style={commomStyle.headerText}>Time Left:</Text>
            <Text style={commomStyle.valueText}>{this.props.lefttime}</Text>
          </View>
          <View style={commomStyle.rightContainer}>
                <Text style={commomStyle.listButton}>SHOW BILL</Text>
            </View>
          </View>
          <Text style={[commomStyle.headerText, commomStyle.marginTOP]}>
            Members Name:
          </Text>
          <Text style={commomStyle.valueText}>
            {this.props.membersname}
          </Text>
        </View>
      </View>
    );
  }
}
export default FoodComponent;
