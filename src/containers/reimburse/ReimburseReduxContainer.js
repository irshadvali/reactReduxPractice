import { connect } from 'react-redux';
import React, { Component } from "react";
import ReimburseDetail from '../../components/reimbursedetails/ReimburseDetail';
import { fetchReimburseDetailInfo } from "../../action/reimburse.action";
import { ACCOUNTS_GET_PARAMETER } from "../../utils/Constant";


const mapDispatchToProps = dispatch => {
  return {
    fetchReimburseDetailInfo: () => {
      dispatch(fetchReimburseDetailInfo());
    }
  };
};

const mapStateToProps = state => {
  return {  
    error: state.reimburseDetailsReducer.error,
    loading: state.reimburseDetailsReducer.loading
  };
};



const ReimburseReduxContainer = connect(mapStateToProps, mapDispatchToProps)(ReimburseDetail);

export default ReimburseReduxContainer;