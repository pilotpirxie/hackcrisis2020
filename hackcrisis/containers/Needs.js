import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';
import Wrapper from '../components/Wrapper';

export default class Needs extends Component {
  constructor() {
    super();

    this.state = {
      needs: '',
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
      const value = JSON.parse(await AsyncStorage.getItem('statusData'));
      const state = { ...value, ...this.state };
      await fetch('https://');
      this.props.navigation.navigate('Submitted');
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się zapisać danych');
    }
  }

  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>

          <NavbarProgressbar
            current={1}
            max={1}
            icon="arrow-left"
            handlePress={() => this.props.navigation.navigate('Home')}
          />

          <Input
            label="Opisz potrzebę"
            value={this.state.needs}
            handleChangeText={(newValue) => this.setValue('needs', newValue)}
            placeholder="Potrzebna pomoc"
          />

          <Button
            handlePress={() => this.props.navigation.navigate('Submitted')}
            icon="arrow-up"
          >
            Wyślij
          </Button>
        </View>
      </Wrapper>
    );
  }
}


Needs.propTypes = {
  navigation: PropTypes.object.isRequired,
};
