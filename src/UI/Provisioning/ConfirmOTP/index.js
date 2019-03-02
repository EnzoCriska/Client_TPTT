import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderConfirmOTP } from './render';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';

import {connect} from 'react-redux'
import {updatePhoneNumberActions} from '../../../actions/updatePhoneNumber'
import { getAccessToken } from '../../../Util/UtilFunction/asyncStorage';

class ConfirmOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone: this.props.navigation.getParam('phone'),
        OTP :''
    };
  }

  onChangeOTP(text){
      this.setState({OTP:text})
  }

  async onConfirm(){
    const {phone, OTP} = this.state
    const token  = await getAccessToken()
    const from = this.props.navigation.getParam('router')
    const state = this.props

    this.props.updatePhoneNumberActions(this, from, state, phone, OTP, token)
  }

  render() {
      const {OTP} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderConfirmOTP
          OTP = {OTP}
          onChangeOTP = {(text) =>this.onChangeOTP(text)}
          onConfirm = {() => this.onConfirm()}
      />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.loginReducer,
      loadInfo: state.loadInfoReducer
  }
};

export default connect (mapStateToProps, {updatePhoneNumberActions})(ConfirmOTP)

