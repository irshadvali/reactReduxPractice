import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import TravelComponent from "../../components/reimbursedetails/TravelComponent";
import styles from "../../components/account/AccountListStyle";

const mapStateToProps = state => {
    return {
         travel_info: state.reimburseDetailsReducer.travel_info,
    };
  };

class TravelContainerDisplay extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>            
          <TravelComponent
            travelby={this.props.travel_info.travelby}
            fromAddress={this.props.travel_info.fromAddress}
            toAddress={this.props.travel_info.toAddress}
            pickupTime={this.props.travel_info.pickupTime}
            dropTime={this.props.travel_info.DropTime}
            membersName={this.props.travel_info.membersname}
          />

        </View>
        );
    }
}

const TravelContainer = connect(mapStateToProps, null)(TravelContainerDisplay);

export default TravelContainer;