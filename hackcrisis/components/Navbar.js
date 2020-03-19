import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import globalStyles from '../globalStyles';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity onPress={this.props.handlePress}>
          <FontAwesome
            name={this.props.icon}
            size={34}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={globalStyles.title}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}

Navbar.propTypes = {
  handlePress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  backIcon: {
    borderRadius: 18,
    color: '#5468FF',
    flex: 1,
  },
  title: {
    width: '100%',
    flex: 1,
    left: -15,
  },
  navbar: {
    flexDirection: 'row',
    marginBottom: 25,
    flex: 1,
  },
});
