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
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          style={styles.input}
          value={`${this.props.value}`}
          onChangeText={this.props.handleChangeText}
          multiline={this.props.multiline}
        />
      </View>
    );
  }
}

Input.defaultProps = {
  secureTextEntry: false,
  label: '',
  placeholder: '',
  multiline: false,
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    shadowColor: '#3c80d1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 25,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
