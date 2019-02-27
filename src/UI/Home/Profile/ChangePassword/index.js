import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderChangePassword } from './render';

import md5 from 'md5';

import {connect} from 'react-redux';
import {changePassword} from '../../../../actions/changePassworAction';
import { getAccessToken } from '../../../../Util/UtilFunction/asyncStorage';
import {Loading} from '../../../../Util/Component Util/LoadingScreen';
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        oldPassword: '',
        newPassword:'',
        reNewPassword:''
    };
  }

  onChangeOldPassword(text){
      this.setState({
          oldPassword: text
      })
  }

  onChangeNewPassword(text){
    this.setState({
        newPassword: text
    })
}

onChangeReNewPassword(text){
    this.setState({
        reNewPassword: text
    })
}

async onUpdate(){
    const {oldPassword, newPassword, reNewPassword} = this.state
    const token = await getAccessToken()
    console.log(token)
    if (newPassword !== reNewPassword){
        Alert.alert(
            Strings.WARRING,
            Strings.INVALID_PASSWORD
          )
    }else{
        const hashOldPass = md5(oldPassword);
        const hashNewPass = md5(newPassword);
        this.props.changePassword(this, hashOldPass, hashNewPass, token)
    }

    console.log(this.props)
}

  render() {
    const {oldPassword, newPassword, reNewPassword} = this.state
    console.log(this.props.data)
    if(this.props.data.data.isChanging) return <Loading/>
    return (
        <RenderChangePassword
            oldPassword = {oldPassword}
            newPassword = {newPassword}
            reNewPassword = {reNewPassword}
            onChangeOldPassword = {(text) => this.onChangeOldPassword(text)}
            onChangeNewPassword = {(text) => this.onChangeNewPassword(text)}
            onChangeReNewPassword = {(text) => this.onChangeReNewPassword(text)}
            onUpdate = {() => this.onUpdate()}
        />
    );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.changePasswordReducer,
        loginData: state.loginReducer
    }
};

export default connect (mapStateToProps, {changePassword})(ChangePassword)
