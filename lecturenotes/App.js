import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import TestComponent from './components/test-component.js';

export default class lecturenotes extends Component {
  render() {
    return (
      <View>
        <TestComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('lecturenotes', () => lecturenotes);
