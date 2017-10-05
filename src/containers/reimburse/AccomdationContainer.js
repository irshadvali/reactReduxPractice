import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import AccomdationComponent from "../../components/reimbursedetails/AccomdationComponent";
import styles from "../../components/account/AccountListStyle";

const mapStateToProps = state => {
    return {
         accomdation_info: state.reimburseDetailsReducer.accomdation_info,
    };
  };

class AccomdationContainerDisplay extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>            
          <AccomdationComponent
          accDate={this.props.accomdation_info.accoDate}
            hotelName={this.props.accomdation_info.hotelName}
            locationName={this.props.accomdation_info.locationName}
            checkIn={this.props.accomdation_info.checkin}
            checkOut={this.props.accomdation_info.checkout}
            membersName={this.props.accomdation_info.membersname}
          />

        </View>
        );
    }
}

const AccomdationContainer = connect(mapStateToProps, null)(AccomdationContainerDisplay);

export default AccomdationContainer;