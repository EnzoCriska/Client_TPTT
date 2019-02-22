
import React, {Component} from 'react';
import Main from './src/UI/MainStack';
import {Provider} from 'react-redux';
import store from './src/store/configStore';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Main/>
      </Provider>
      
    );
  }
}