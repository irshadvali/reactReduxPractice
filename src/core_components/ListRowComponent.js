import React, { Component, PropTypes } from "react";
import { AppRegistry, Text, View, Image } from "react-native";
import styles from "../components/fleet/FleetsStyles.js";
class ListRowComponent extends Component {
  static propTypes = {
    rowImg: PropTypes.number,
    rowTextOne: PropTypes.string,
    rowTextTwo: PropTypes.string,
    rowTextThree: PropTypes.string,
    rowTextFour: PropTypes.string
  };

  render() {
    return (
      <View>
        <View style={styles.fleetsListItemContainer}>
          <Image style={styles.fleetsRowImg} source={this.props.rowImg} />
          <Text style={styles.fleetsListRowText}>{this.props.rowTextOne}</Text>
          <View style={styles.deviderLine} />
          <Text style={styles.fleetsListRowText}>
            {this.props.rowTextTwo +
              this.props.rowTextThree +
              " " +
              this.props.rowTextFour}
          </Text>
        </View>
      </View>
    );
  }
}
export default ListRowComponent;
