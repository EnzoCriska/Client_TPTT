import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderUpdatePhoneNumber } from './render';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';

import {connect} from 'react-redux'
import {updatePhoneNumberActions} from '../../../actions/updatePhoneNumber'
import { getAccessToken } from '../../../Util/UtilFunction/asyncStorage';
import { UpdatePhoneNumberAPI } from '../../../Network/ProvisioningAPI';
import { alert } from '../../../Util/Component Util/alert';


class UpdatePhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    };
  }

  onChangePhone(text){
      this.setState({phone: text})
  }

  async onUpdate(){
    const {phone} = this.state
    const token  = await getAccessToken()
    UpdatePhoneNumberAPI(phone,token).then(res=>{
      const body =JSON.parse(res._bodyText)
      if(body.code === 200){
        const from = this.props.navigation.getParam('router')
        this.props.navigation.navigate('OTPConfirm', {router: from, phone: this.state.phone})
      }else{
        alert("WARRING", "Lỗi, vui lòng thử lại", () => {this.setState({phone: ''})})
      }
    })
    
    // console.log(this.props)
    
    
    // const state = this.props

    // this.props.updatePhoneNumberActions(this, from, state, phone, token)
 }

  render() {
    const {phone} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderUpdatePhoneNumber
          phone = {phone}
          onChangePhone = {(text) => this.onChangePhone(text)}
          onUpdate = {() => this.onUpdate()}
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

export default connect (mapStateToProps, {updatePhoneNumberActions})(UpdatePhoneNumber)
