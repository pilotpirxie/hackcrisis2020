import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';

export default class Status0 extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>

        <NavbarProgressbar
          current={1}
          max={3}
          icon="close"
          handlePress={() => console.log('Test')}
        />

        <View style={styles.container}>
          <View style={styles.roundedImage}>
            <Image
              style={styles.image}
              source={require('../assets/image2.png')}
            />
          </View>

          <Text style={globalStyles.title}>
            {"Przygotuj się do \nodpowiedzi na kilka \npytań o stan zdrowia"}
          </Text>
        </View>

        <Button
          handlePress={() => {}}
          icon="arrow-right"
        >
          Dalej
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
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
