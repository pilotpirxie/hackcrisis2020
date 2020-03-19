import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Button from '../components/Button';
import globalStyles from '../globalStyles';

export default class Submitted extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>
        <Text style={globalStyles.title}>
          {`Wysłano`}
        </Text>

        <Text style={globalStyles.header}>
          Informacja została wysłana do ustawionej jednostki nadzorującej. Jeżeli potrzebujesz pilnej pomocy, nie czekaj i zadzwoń na numer alarmowy!
        </Text>

        <Button
          handlePress={() => {}}
          icon="arrow-left"
        >
          Powrót
        </Button>
      </View>
    );
  }
}