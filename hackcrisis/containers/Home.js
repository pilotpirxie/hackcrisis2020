import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import globalStyles from '../globalStyles';

export default class Home extends Component {
  render() {
    return (
      <View style={globalStyles.innerContainer}>
        <Text style={globalStyles.title}>Kraków, 18.03.2020</Text>
        <Text style={globalStyles.header}>Regularnie informuj lokalne władze o swoim stanie zdrowia i ewentualnych potrzebach.</Text>
        <Button handlePress={() => {}}>Wyślij status</Button>
        <Button handlePress={() => {}}>Zgłoś potrzebę</Button>
        <Button handlePress={() => {}}>Ustawienia</Button>
      </View>
    );
  }
}
