import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import styles from "../../components/account/AccountListStyle";
import AccountListItem from "../../components/account/AccountListItem";

const mapStateToProps = state => {
    return {
        accountResults: state.accountsReducer.accountResults,
    };
  };
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// create a component
class AccountListDisplayComponent extends Component {
    render() {
        return (
        <View style={styles.accountListViewContainer}>
          <ListView
          enableEmptySections={true}
            dataSource={ds.cloneWithRows(this.props.accountResults)}
            renderRow={rowData => (
              <View>
                <AccountListItem
                  toCity={rowData.tripDetails.load.city_from}
                  fromCity={rowData.tripDetails.load.city_to}
                  trkCapacity={rowData.tripDetails.avail.truck_details.trkCap}
                  trkType={rowData.tripDetails.avail.truck_details.trkType}
                  trkMfg={rowData.tripDetails.avail.truck_details.trk_mfg}
                  trkDmm={rowData.tripDetails.avail.truck_details.chsDmn}
                  trkNumber={rowData.tripDetails.avail.truck_details.trkno}
                  commodityType={rowData.tripDetails.load.commodity_type}
                  packingType={rowData.tripDetails.load.packing_type}
                  companyName={rowData.tripDetails.load.company_name}
                  companyMobile={rowData.tripDetails.load.npRegNumber}
                  offerPrice={rowData.tripDetails.load.offer_price}
                />
              </View>
            )}
          />
          
        </View>
        );
    }
}

const AccountListDisplayContainer = connect(mapStateToProps, null)(AccountListDisplayComponent);

export default AccountListDisplayContainer;