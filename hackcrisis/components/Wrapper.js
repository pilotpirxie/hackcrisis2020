import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
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

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Wrapper;
