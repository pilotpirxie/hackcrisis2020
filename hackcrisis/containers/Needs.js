import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';

export default class Needs extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>

        <NavbarProgressbar
          current={1}
          max={1}
          icon="arrow-left"
          handlePress={() => console.log('Test')}
        />

        <Input
          label="Opisz potrzebę"
          value=""
          handleChangeText={() => {}}
          placeholder="Potrzebna pomoc"
        />

        <Button
          handlePress={() => {}}
          icon="arrow-up"
        >
          Wyślij
        </Button>
      </View>
    );
  }
}