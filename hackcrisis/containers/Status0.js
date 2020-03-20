import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';

import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';

const imageSource = require('../assets/image2.png');

export default class Status0 extends Component {
  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>

          <NavbarProgressbar
            current={1}
            max={3}
            icon="close"
            handlePress={() => this.props.navigation.navigate('Home')}
          />

          <View style={styles.container}>
            <View style={styles.roundedImage}>
              <Image
                style={styles.image}
                source={imageSource}
              />
            </View>

            <Text style={globalStyles.title}>
              {'Przygotuj się do \nodpowiedzi na kilka \npytań o stan zdrowia'}
            </Text>
          </View>

          <Button
            handlePress={() => this.props.navigation.navigate('Status1')}
            icon="arrow-right"
          >
            Dalej
          </Button>
        </View>
      </Wrapper>
    );
  }
}

Status0.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  roundedImage: {
    borderRadius: 125,
    overflow: 'hidden',
    width: 250,
    height: 250,
    backgroundColor: '#5468FF',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
