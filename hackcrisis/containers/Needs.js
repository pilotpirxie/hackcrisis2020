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
      const authorityId = await AsyncStorage.getItem('authorityId');
      const userId = await AsyncStorage.getItem('userId');

      await fetch(`http://192.168.0.186:8080/authorities/${authorityId}/email`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: JSON.stringify({
            ...this.state,
          }),
          requestType: 'Potrzeba',
          userId,
        }),
      });
      this.props.navigation.navigate('Submitted');
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się wysłać danych. W przypadku pilnej potrzeby zadzwoń na Telefoniczną Informację Pacjenta 800 190 590 lub pod 112.');
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
            handlePress={this.onPress}
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
