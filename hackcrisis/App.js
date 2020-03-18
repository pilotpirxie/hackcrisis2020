import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Home from './containers/Home';
import globalStyles from './globalStyles';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Home />
      </SafeAreaView>
    );
  }
}
