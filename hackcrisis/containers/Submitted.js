import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Wrapper from '../components/Wrapper';

export default class Submitted extends Component {
  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>
          <Text style={globalStyles.title}>
            Wysłano
          </Text>

          <Text style={globalStyles.header}>
            Informacja została wysłana do ustawionej jednostki nadzorującej. Jeżeli potrzebujesz pilnej pomocy, nie czekaj i zadzwoń na numer alarmowy!
          </Text>

          <Button
            handlePress={() => this.props.navigation.navigate('Home')}
            icon="arrow-left"
          >
            Powrót
          </Button>
        </View>
      </Wrapper>
    );
  }
}

Submitted.propTypes = {
  navigation: PropTypes.object.isRequired,
};
