import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Wrapper from '../components/Wrapper';
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
      <Wrapper>
        <View style={globalStyles.innerContainer}>
          <Text style={globalStyles.title}>
            {`Kraków, ${dateToRender}`}
          </Text>
          <Text style={globalStyles.header}>Regularnie informuj lokalne władze o swoim stanie zdrowia i ewentualnych potrzebach.</Text>
          <Button
            primary
            handlePress={() => this.props.navigation.navigate('Status0')}
            icon="arrow-right"
            large
          >
          Wyślij status
          </Button>
          <Button
            handlePress={() => this.props.navigation.navigate('Needs')}
            icon="plus"
            large
          >
            Zgłoś potrzebę
          </Button>
          <Button
            handlePress={() => this.props.navigation.navigate('Settings')}
            icon="gear"
            large
          >
            Ustawienia
          </Button>
          <Text style={globalStyles.label}>
            Wiedza
          </Text>
          <Card
            label="Covid-19"
            title="Fakty i mity na temat koronawirusa"
            handlePress={() => this.props.navigation.navigate('Article')}
          />
        </View>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
