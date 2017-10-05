import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import FoodComponent from "../../components/reimbursedetails/FoodComponent";
import styles from "../../components/account/AccountListStyle";

const mapStateToProps = state => {
    return {
         food_info: state.reimburseDetailsReducer.food_info,
    };
  };

class FoodContainerDisplay extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>            
         <FoodComponent
            lefttime={this.props.food_info.timeleft}
            membersname={this.props.food_info.membersname}
          />

        </View>
        );
    }
}

const FoodContainer = connect(mapStateToProps, null)(FoodContainerDisplay);

export default FoodContainer;