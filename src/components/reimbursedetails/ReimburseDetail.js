import React, { Component } from "react";
import { AppRegistry, ScrollView } from "react-native";
import { ActivityIndicator, View, Text, ListView } from "react-native";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { fetchReimburseDetailInfo } from "../../action/reimburse.action";
import { REIMBURSE_DETAILS_GET_PARAMETER } from "../../utils/Constant";
import ReiemburseDetailsHeaderContainer from '../../containers/reimburse/ReiemburseDetailsHeaderContainer'
import FoodContainer from '../../containers/reimburse/FoodContainer'
import TravelContainer from '../../containers/reimburse/TravelContainer'
import PurchaseContainer from '../../containers/reimburse/PurchaseContainer'
import AccomdationContainer from '../../containers/reimburse/AccomdationContainer'

class ReimburseDetail extends Component {
  static navigationOptions = {
    title: "Reimburse Detail"
  };


  componentDidMount() {
    /* Call Api */
    this.props.fetchReimburseDetailInfo();
  }


  
  render() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={{ flex: 1, paddingTop: 10 }}>
           <ReiemburseDetailsHeaderContainer /> 
           <TravelContainer />
           <PurchaseContainer />
           <AccomdationContainer />

         </View>
      </ScrollView>
    );
  }
}



export default ReimburseDetail;
