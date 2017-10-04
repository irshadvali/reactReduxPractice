import { connect } from 'react-redux';
import React, { Component } from "react";
import AccountList from '../../components/account/AccountList';
import { fetchAccountListInfo } from "../../action/account.actions";
import { ACCOUNTS_GET_PARAMETER } from "../../utils/Constant";


const mapDispatchToProps = dispatch => {
  return {
    fetchAccountListInfo: () => {
      dispatch(fetchAccountListInfo());
    }
  };
};

const mapStateToProps = state => {
  return {  
    error: state.accountsReducer.error,
    loading: state.accountsReducer.loading
  };
};



const AccountListContainer = connect(mapStateToProps, mapDispatchToProps)(AccountList);

export default AccountListContainer;