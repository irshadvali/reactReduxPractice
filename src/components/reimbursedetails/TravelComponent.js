import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import commonStyle from "./../../core_components/CommonStyle";
import FoodContainerStyle from "./FoodContainerStyle";

class TravelComponent extends React.Component {
  static propTypes = {
    travelby: React.PropTypes.string,
    fromAddress: React.PropTypes.string,
    toAddress: React.PropTypes.string,
    pickupTime: React.PropTypes.string,
    dropTime: React.PropTypes.string,
    membersName: React.PropTypes.string,
  };
  render() {
    return (
      <View style={{ height: 270 }}>
        <View style={FoodContainerStyle.container}>
          <View style={commonStyle.rowDirectionContainer}>
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>Travelled By:</Text>
              <Text style={commonStyle.valueText}>{this.props.travelBy}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.listButton}>SHOW BILL</Text>
            </View>
          </View>
          {/* second row start */}
          <View
            style={[commonStyle.rowDirectionContainer, commonStyle.marginTOP]}
          >
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>From:</Text>
              <Text style={commonStyle.valueText}>{this.props.fromAddress}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.headerText}>To:</Text>
              <Text style={commonStyle.valueText}>{this.props.toAddress}</Text>
            </View>
          </View>
          {/* second row end */}
          {/* Third row start */}
          <View
            style={[commonStyle.rowDirectionContainer, commonStyle.marginTOP]}
          >
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>Pickup Time:</Text>
              <Text style={commonStyle.valueText}>{this.props.pickupTime}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.headerText}>End Time:</Text>
              <Text style={commonStyle.valueText}>{this.props.dropTime}</Text>
            </View>
          </View>
          {/* Third row end */}

             <Text style={[commonStyle.headerText,commonStyle.marginTOP]}>Left Time:</Text>
              <Text style={commonStyle.valueText}>{this.props.pickupTime}</Text>
          <Text style={[commonStyle.headerText, commonStyle.marginTOP]}>
            Members Name:
          </Text>
          <Text style={commonStyle.valueText}>{this.props.membersName}</Text>
        </View>
      </View>
    );
  }
}
export default TravelComponent;
