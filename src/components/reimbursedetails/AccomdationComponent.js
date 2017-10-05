import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import commonStyle from "./../../core_components/CommonStyle";
import FoodContainerStyle from "./FoodContainerStyle";

class AccomdationComponent extends React.Component {
  static propTypes = {
    accDate: React.PropTypes.string,
    hotelName: React.PropTypes.string,
    locationName: React.PropTypes.string,
    checkIn: React.PropTypes.string,
    checkOut: React.PropTypes.string,
    membersName: React.PropTypes.string
  };
  render() {
    return (
      <View style={{ height: 220 }}>
        <View style={FoodContainerStyle.container}>
          <View style={commonStyle.rowDirectionContainer}>
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>Date:</Text>
              <Text style={commonStyle.valueText}>{this.props.accDate}</Text>
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
              <Text style={commonStyle.headerText}>Hotel Name:</Text>
              <Text style={commonStyle.valueText}>{this.props.hotelName}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.headerText}>Location</Text>
              <Text style={commonStyle.valueText}>{this.props.locationName}</Text>
            </View>
          </View>
          {/* second row end */}
          {/* Third row start */}
          <View
            style={[commonStyle.rowDirectionContainer, commonStyle.marginTOP]}
          >
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>Check In:</Text>
              <Text style={commonStyle.valueText}>{this.props.checkIn}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.headerText}>Check out:</Text>
              <Text style={commonStyle.valueText}>{this.props.checkOut}</Text>
            </View>
          </View>
          {/* Third row end */}
          <Text style={[commonStyle.headerText, commonStyle.marginTOP]}>
            Members Name:
          </Text>
          <Text style={commonStyle.valueText}>{this.props.membersName}</Text>
        </View>
      </View>
    );
  }
}
export default AccomdationComponent;
