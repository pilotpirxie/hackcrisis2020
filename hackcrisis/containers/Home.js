import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import Card from '../components/Card';
import globalStyles from '../globalStyles';

export default class Home extends Component {
  render() {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const dateToRender = `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year < 10 ? `0${year}` : year}`;
    return (
      <View style={globalStyles.innerContainer}>
        <Text style={globalStyles.title}>
          {`Kraków, ${dateToRender}`}
        </Text>
        <Text style={globalStyles.header}>Regularnie informuj lokalne władze o swoim stanie zdrowia i ewentualnych potrzebach.</Text>
        <Button
          primary
          handlePress={() => {}}
          icon="arrow-right"
        >
        Wyślij status
        </Button>
        <Button
          handlePress={() => {}}
          icon="plus"
        >
          Zgłoś potrzebę
        </Button>
        <Button
          handlePress={() => {}}
          icon="gear"
        >
          Ustawienia
        </Button>
        <Text style={globalStyles.label}>
          Wiedza
        </Text>
        <Card
          label="Covid-19"
          title="Fakty i mity na temat koronawirusa"
        />
      </View>
    );
  }
}
