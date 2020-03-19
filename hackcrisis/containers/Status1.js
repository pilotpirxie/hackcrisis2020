import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';

export default class Status1 extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>

        <NavbarProgressbar
          current={2}
          max={3}
          icon="arrow-left"
          handlePress={() => console.log('Test')}
        />

        <Input
          label="Jaką masz temperaturę ciała?"
          value=""
          handleChangeText={() => {}}
          placeholder="Temperatura ciała"
        />

        <Input
          label="Czy odczuwasz bóle głowy?"
          value=""
          handleChangeText={() => {}}
          placeholder="tak/nie"
        />

        <Input
          label={'Czy cierpisz na kaszel? \nMokry czy suchy?'}
          value=""
          handleChangeText={() => {}}
          placeholder="Kaszel"
        />

        <Input
          label={'Czy masz problemy \nz oddychaniem?'}
          value=""
          handleChangeText={() => {}}
          placeholder="Problemy z oddychaniem"
        />

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