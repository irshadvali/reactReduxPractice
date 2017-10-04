import React, { Component } from "react";
import styles from "../components/Styles";

import { AppRegistry, Text, View } from "react-native";

class CityDetailsListItem extends React.Component {
  static propTypes = {
    ptime: React.PropTypes.string,
    pday: React.PropTypes.string,
    pPkg: React.PropTypes.string,
    pBundle: React.PropTypes.string,
    pWt: React.PropTypes.string
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.citydetailListmain}>
          <View style={styles.partOne}>
            <Text> {this.props.ptime}</Text>
            <Text>({this.props.pday})</Text>
          </View>
          <View style={styles.partThree} />
          <View style={styles.partTwo}>
            <Text style={styles.citydetailTexcolorbold}>
              {" "}
              {this.props.pPkg + "( " + this.props.pBundle + " )"}
            </Text>
            <Text style={styles.citydetailTexcolorbold}>({"Wt. " + this.props.pWt})</Text>
          </View>
        </View>

        <View style={ styles.viewStyle} />
      </View>
    );
  }
}
export default CityDetailsListItem;
