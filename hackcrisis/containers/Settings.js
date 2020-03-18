import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import globalStyles from '../globalStyles';

export default class Settings extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>

        <Input
          label="Identyfikator jednostki nadzorującej"
          value=""
          handleChangeText={() => {}}
        />

        <Input
          label="Identyfikator użytkownika"
          value=""
          handleChangeText={() => {}}
        />

        <Input
          label="Klucz sekretny"
          value=""
          secureTextEntry
          handleChangeText={() => {}}
        />

        <Input
          label="Identyfikator urządzenia"
          value=""
          handleChangeText={() => {}}
        />

        <Button handlePress={() => {}}>Zapisz</Button>
        <Button handlePress={() => {}}>Powrót</Button>
      </View>
    );
  }
}
