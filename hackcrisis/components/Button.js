import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.handlePress}>
        <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    padding: 36,
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 6,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
