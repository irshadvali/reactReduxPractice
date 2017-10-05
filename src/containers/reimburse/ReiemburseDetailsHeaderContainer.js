import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import styles from "../../components/account/AccountListStyle";
import ReiemburseDetailsHeader from "../../components/reimbursedetails/ReimburseDetailsHeader";

const mapStateToProps = state => {
    return {
         reimburse_info: state.reimburseDetailsReducer.reimburse_info,
    };
  };

class ReiemburseDetailsHeaderDisplay extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>            
          <ReiemburseDetailsHeader
            reimbrusDate={this.props.reimburse_info.rdate}
            reimbrusProject={this.props.reimburse_info.rproject}
            reimbrusAmount={this.props.reimburse_info.ramount}
            reimbrusType={this.props.reimburse_info.rtype}
             paidFlag={this.props.reimburse_info.paid} 
          />

        </View>
        );
    }
}

const ReiemburseDetailsHeaderContainer = connect(mapStateToProps, null)(ReiemburseDetailsHeaderDisplay);

export default ReiemburseDetailsHeaderContainer;