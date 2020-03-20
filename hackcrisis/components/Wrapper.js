import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import globalStyles from '../globalStyles';

class Wrapper extends Component {
  render() {
    return (
      <ScrollView
        style={globalStyles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView style={globalStyles.container}>
          {this.props.children}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Wrapper;
