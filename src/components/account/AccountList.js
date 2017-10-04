import React, { Component } from "react";
import styles from "./AccountListStyle";
import AccountListItem from "./AccountListItem";
import { ACCOUNTS_GET_PARAMETER } from "../../utils/Constant";
import { fetchAccountListInfo } from "../../action/account.actions";
import { connect } from "react-redux";
import AccountListDisplayContainer from '../../containers/account/AccountListDisplayContainer'
import {
  ActivityIndicator,
  ListView,
  View,
  Text,
  StyleSheet
} from "react-native";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class AccountList extends Component {
  static navigationOptions = {
    title: "AccountList"
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Call Api */
    this.props.fetchAccountListInfo();
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.accountsLoaderStyle}>
          <ActivityIndicator />
          
        </View>
      );
    } else {
      return (
        <View style={styles.accountListViewContainer}>
          <AccountListDisplayContainer/>
        </View>
      );
    }
  }
}

export default  AccountList;
