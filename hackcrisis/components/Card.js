import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={this.props.handlePress}
      >
        <Text style={styles.label}>{this.props.label}</Text>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.prompt}>
          Dotknij aby przejść do artykułu
        </Text>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  handlePress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 15,
    shadowColor: '#5468ff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#344356',
  },
  label: {
    color: '#5468FF',
    textTransform: 'uppercase',
    marginBottom: 15,
    fontSize: 18,
  },
  prompt: {
    color: '#344356',
    opacity: 0.6,
    marginTop: 15,
    fontSize: 18,
  },
});
