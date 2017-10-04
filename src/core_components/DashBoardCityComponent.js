import React, { Component, PropTypes } from "react";
import { AppRegistry, Text, View, Image } from "react-native";
import styles from "../components/Styles";

class DashBoardCityComponent extends Component {
  static propTypes = {
    cityName: PropTypes.string,
    loadsAvailable: PropTypes.string
  };

  render() {
    return (
      <View style={styles.dbCityListItem}>
        <Image
          style={styles.locationImg}
          source={require("../images/fifty_one.png")}
        />
        <Text style={styles.dbCityListTxt}>{this.props.cityName}</Text>

        <Text style={styles.dbCityLableTxt}> Loads {"\n"} Availble </Text>

        <View style={styles.dbCityCircleView}>
          <Text style={styles.dbCityCircleTxt}>
            {this.props.loadsAvailable}
          </Text>
        </View>

        <Image
          style={styles.dbCityNextArrow}
          source={require("../images/fourteen.png")}
        />
      </View>
    );
  }
}
export default DashBoardCityComponent;
