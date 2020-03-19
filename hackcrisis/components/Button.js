import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

export default class Button extends Component {
  render() {
    const buttonStyles = StyleSheet.create({
      button: {
        padding: 24,
        borderRadius: 15,
        shadowColor: '#5468ff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 25,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: this.props.primary ? '#FF5454' : '#5468FF',
        flexDirection: 'row',
      },
      icon: {
        paddingLeft: 8,
        right: 36,
        width: 36,
        borderRadius: 18,
        overflow: 'hidden',
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
        width: '100%',
      },
    });

    return (
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={this.props.handlePress}
      >
        <Text style={buttonStyles.text}>
          {`${this.props.children}`}
        </Text>
        {this.props.icon && <FontAwesome
          name={this.props.icon}
          size={20}
          color="#fff"
          style={buttonStyles.icon}
        />}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  primary: false,
  icon: false
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  icon: PropTypes.string
};