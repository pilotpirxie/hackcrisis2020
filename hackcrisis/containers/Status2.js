import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';

export default class Status2 extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>

        <NavbarProgressbar
          current={3}
          max={3}
          icon="arrow-left"
          handlePress={() => console.log('Test')}
        />

        <Input
          label="Dodatkowe uwagi i potrzeby"
          value=""
          handleChangeText={() => {}}
          placeholder="Uwagi i potrzeby"
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
