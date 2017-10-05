import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PurchaseComponent from "../../components/reimbursedetails/PurchaseComponent";
import styles from "../../components/account/AccountListStyle";

const mapStateToProps = state => {
    return {
         purchaged_info: state.reimburseDetailsReducer.purchaged_info,
    };
  };

class PurchaseContainerDisplay extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>            
          <PurchaseComponent
             membersname={this.props.purchaged_info.purchedBy}
            purchagedDate={this.props.purchaged_info.purDate}
            quantity={this.props.purchaged_info.quantity}
            itemnane={this.props.purchaged_info.itemnane}
            purchedBy={this.props.purchaged_info.purchedBy}
          />

        </View>
        );
    }
}

const PurchaseContainer = connect(mapStateToProps, null)(PurchaseContainerDisplay);

export default PurchaseContainer;