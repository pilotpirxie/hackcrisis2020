import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

export default class NavbarProgressbar extends Component {
  render() {
    const progressbarStyles = StyleSheet.create({
      bar: {
        backgroundColor: '#00D9CD',
        width: `${Number.parseInt(100 * (this.props.current / this.props.max), 10)}%`,
        height: 16,
        borderRadius: 15,
        zIndex: 1,
      },
    });
    return (
      <View style={styles.navbarOuter}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={this.props.handlePress}>
            <FontAwesome
              name={this.props.icon}
              size={34}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.progressbarContainer}>
            <View style={styles.center}>
              <View>
                <View style={styles.background} />
              </View>
              <View>
                <View style={progressbarStyles.bar} />
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.step}>
          {`${this.props.current}/${this.props.max}`}
        </Text>
      </View>
    );
  }
}

NavbarProgressbar.propTypes = {
  handlePress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  backIcon: {
    borderRadius: 18,
    color: '#5468FF',
  },
  progressbarContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  center: {
    justifyContent: 'space-around',
  },
  background: {
    backgroundColor: '#D4DCE7',
    width: '100%',
    height: 16,
    borderRadius: 15,
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  navbar: {
    flexDirection: 'row',
    flex: 1,
  },
  navbarOuter: {
    marginBottom: 25,
  },
  step: {
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.6,
    color: '#344356',
  },
});
