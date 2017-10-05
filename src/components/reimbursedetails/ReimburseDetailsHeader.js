import React, { Component } from "react";
import ReimburseHeaderStyle from "./ReimburseHeaderStyle";
import { AppRegistry, Text, View } from "react-native";
import commonstyle from "./../../core_components/CommonStyle";

class ReimburseDetailsHeader extends React.Component {
  static propTypes = {
    reimbrusDate: React.PropTypes.string,
    reimbrusAmount: React.PropTypes.string,
    reimbrusProject: React.PropTypes.string,
    reimbrusType: React.PropTypes.string,
    paidFlag: React.PropTypes.string
  };
  conditionReimburseType = () => {
    if (this.props.reimbrusType === "1") {
      return <Text style={commonstyle.valueText}>Food</Text>;
    } 
    if (this.props.reimbrusType === "2") {
      return <Text style={commonstyle.valueText}>{"Cab"}</Text>;
    } else {
      return <Text style={commonstyle.valueText}>{"Others"}</Text>;
    }
  };

  conditionPaidType = () => {
    if (this.props.paidFlag === "1") {
      return <Text style={ReimburseHeaderStyle.headerText}>Paid</Text>;
    }
   else if (this.props.paidFlag === "2") {
      return <Text style={ReimburseHeaderStyle.headerText}>Rejected</Text>;
    } else {
      return <Text style={ReimburseHeaderStyle.headerText}>Pending</Text>;
    }
  };

  render() {
    let stringa;

    return (
      <View style={{ height: 150 }}>
        <View style={ReimburseHeaderStyle.container}>
          <Text style={ReimburseHeaderStyle.headerText}>
                      {this.conditionPaidType()}           
          </Text>
          <View style={ReimburseHeaderStyle.userListContainer}>
            <View style={commonstyle.leftContainer}>
              <Text style={commonstyle.headerText}>Date</Text>
              <Text style={commonstyle.valueText}>
                {this.props.reimbrusDate}
              </Text>
            </View>
            <View style={commonstyle.rightContainer}>
              <Text style={commonstyle.headerText}>Project Name</Text>
              <Text style={commonstyle.valueText}>
                {this.props.reimbrusProject}
              </Text>
            </View>
          </View>
          <View
            style={[
              ReimburseHeaderStyle.userListContainer,
              commonstyle.marginTOP
            ]}
          >
            <View style={commonstyle.leftContainer}>
              <Text style={commonstyle.headerText}>Reimburse Type</Text>
              {this.conditionReimburseType()}
            </View>
            <View style={commonstyle.rightContainer}>
              <Text style={commonstyle.headerText}>Amount</Text>
              <Text style={commonstyle.valueText}>
                {this.props.reimbrusAmount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default ReimburseDetailsHeader;
