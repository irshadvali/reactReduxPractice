import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import commonStyle from "./../../core_components/CommonStyle";
import FoodContainerStyle from "./FoodContainerStyle";

class PurchaseComponent extends React.Component {
  static propTypes = {
    purchagedDate: React.PropTypes.string,
    quantity: React.PropTypes.string,
    itemnane: React.PropTypes.string,
    purchedBy: React.PropTypes.string
  };
  render() {
    return (
      <View style={{ height: 170 }}>
        <View style={FoodContainerStyle.container}>
          <View style={commonStyle.rowDirectionContainer}>
            <View style={commonStyle.leftContainer}>
              <Text style={commonStyle.headerText}>Date:</Text>
              <Text style={commonStyle.valueText}>
                {this.props.purchagedDate}
              </Text>
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
              <Text style={commonStyle.headerText}>Qunatity:</Text>
              <Text style={commonStyle.valueText}>{this.props.quantity}</Text>
            </View>
            <View style={commonStyle.rightContainer}>
              <Text style={commonStyle.headerText}>Purchaged By:</Text>
              <Text style={commonStyle.valueText}>{this.props.purchedBy}</Text>
            </View>
          </View>
          {/* second row end */}
          <Text style={[commonStyle.headerText, commonStyle.marginTOP]}>
            Item Name:
          </Text>
          <Text style={commonStyle.valueText}>{this.props.itemnane}</Text>
        </View>
      </View>
    );
  }
}
export default PurchaseComponent;
