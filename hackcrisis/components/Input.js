import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../globalStyles';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        {!!this.props.label.length && (
          <Text
            style={globalStyles.label}
          >
            {this.props.label}
          </Text>
        )}
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          style={styles.input}
          value={`${this.props.value}`}
          onChangeText={this.props.handleChangeText}
        />
      </View>
    );
  }
}

Input.defaultProps = {
  secureTextEntry: false,
  label: '',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomWidth: 3,
    borderColor: '#000',
    padding: 5,
    backgroundColor: '#eee',
  },
});
