import React, { Component } from 'react';
import {
  View, Text, AsyncStorage, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Device from 'expo-device';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import globalStyles from '../globalStyles';
import Wrapper from '../components/Wrapper';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      authorityId: '',
      userId: '',
    };

    this.setValue = this.setValue.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  async componentDidMount() {
    try {
      const location = await AsyncStorage.getItem('location');
      if (location !== null) {
        this.setState((prevState) => ({
          ...prevState,
          location: JSON.parse(location),
        }));
      } else {
        throw Error('Nie udało się pobrać lokalizacji');
      }

      const authorityId = await AsyncStorage.getItem('authorityId');
      this.setState((prevState) => ({
        ...prevState,
        authorityId: authorityId || '',
      }));

      const userId = await AsyncStorage.getItem('userId');
      this.setState((prevState) => ({
        ...prevState,
        userId: userId || '',
      }));
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się pobrać lokalizacji');
    }
  }

  setValue(propName, newValue) {
    this.setState((prevState) => ({
      ...prevState,
      [propName]: newValue,
    }));
  }

  async onPress() {
    try {
      await AsyncStorage.setItem('authorityId', this.state.authorityId);
      await AsyncStorage.setItem('userId', this.state.userId);
      this.props.navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się zapisać');
    }
  }

  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>

          <Navbar
            title="Ustawienia"
            icon="arrow-left"
            handlePress={() => this.props.navigation.navigate('Home')}
          />

          <Text style={globalStyles.header}>
            Jednorazowa konfiguracja urządzenia. Nie zmieniaj tych informacji bez powodu.
            Poniższe dane otrzymasz od najbliższej jednostki nadzorującej.
            Zazwyczaj jest to komisariat policji lub urząd miasta.
          </Text>

          <Input
            label="Identyfikator jednostki nadzorującej"
            value={this.state.authorityId}
            handleChangeText={(newValue) => this.setValue('authorityId', newValue)}
            placeholder="ID jednostki nadzorującej"
          />

          <Input
            label="Identyfikator użytkownika"
            value={this.state.userId}
            // secureTextEntry
            placeholder="Twój ID otrzymany od jednostki nadzorującej"
            handleChangeText={(newValue) => this.setValue('userId', newValue)}
          />

          <Button
            handlePress={this.onPress}
            icon="arrow-up"
          >
            Zapisz
          </Button>

          <Text style={globalStyles.smallText}>
            {`Położenie: ${this.state.location?.coords?.latitude || ''} ${this.state.location?.coords?.longitude || ''}`}
          </Text>

          <Text style={globalStyles.smallText}>
            Nazwa urządzenia:
{' '}
{`${Device.deviceName}`}
          </Text>

          <Text style={globalStyles.smallText}>
            Typ urządzenia:
{' '}
{`${Device.brand} ${Device.modelName} ${Device.osName} ${Device.osBuildId}`}
          </Text>
        </View>
      </Wrapper>
    );
  }
}

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};
