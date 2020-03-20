import React, { Component } from 'react';
import {
  View,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';

import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';
import Wrapper from '../components/Wrapper';

export default class Status1 extends Component {
  constructor() {
    super();

    this.state = {
      temperature: '',
      headache: '',
      cough: '',
      breath: '',
    };

    this.setValue = this.setValue.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  setValue(propName, newValue) {
    this.setState((prevState) => ({
      ...prevState,
      [propName]: newValue,
    }));
  }

  async onPress() {
    try {
      const state = JSON.stringify({ ...this.state });
      this.props.navigation.navigate('Status2', {
        statusData: state,
      });
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się zapisać danych. W przypadku pilnej potrzeby zadzwoń na Telefoniczną Informację Pacjenta 800 190 590 lub pod 112.');
    }
  }

  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>

          <NavbarProgressbar
            current={2}
            max={3}
            icon="arrow-left"
            handlePress={() => this.props.navigation.navigate('Status0')}
          />

          <Input
            label="Jaką masz temperaturę ciała?"
            value={this.state.temperature}
            handleChangeText={(newValue) => this.setValue('temperature', newValue)}
            placeholder="Temperatura ciała"
          />

          <Input
            label="Czy odczuwasz bóle głowy?"
            value={this.state.headache}
            handleChangeText={(newValue) => this.setValue('headache', newValue)}
            placeholder="tak/nie"
          />

          <Input
            label={'Czy cierpisz na kaszel? \nMokry czy suchy?'}
            value={this.state.cough}
            handleChangeText={(newValue) => this.setValue('cough', newValue)}
            placeholder="Kaszel"
          />

          <Input
            label={'Czy masz problemy \nz oddychaniem?'}
            value={this.state.breath}
            handleChangeText={(newValue) => this.setValue('breath', newValue)}
            placeholder="Problemy z oddychaniem"
          />

          <Button
            handlePress={() => this.onPress()}
            icon="arrow-right"
          >
            Dalej
          </Button>
        </View>
      </Wrapper>
    );
  }
}

Status1.propTypes = {
  navigation: PropTypes.object.isRequired,
};
