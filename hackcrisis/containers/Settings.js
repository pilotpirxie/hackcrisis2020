import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Device from 'expo-device';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import globalStyles from '../globalStyles';
import Wrapper from '../components/Wrapper';

export default class Settings extends Component {
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
            Niezbędne dane otrzymasz od najbliższej jednostki nadzorującej.
            Zazwyczaj jest to komisariat policji lub urząd miasta.
          </Text>

          <Input
            label="Identyfikator jednostki nadzorującej"
            value=""
            handleChangeText={() => {}}
            placeholder="ID jednostki nadzorującej"
          />

          <Input
            label="Identyfikator użytkownika"
            value=""
            secureTextEntry
            placeholder="Twój ID otrzymany od jednostki nadzorującej"
            handleChangeText={() => {}}
          />

          {/* <Input */}
          {/*  label="Imię i nazwisko" */}
          {/*  value="" */}
          {/*  placeholder="Twoje imię i nazwisko" */}
          {/*  handleChangeText={() => {}} */}
          {/* /> */}

          {/* <Input */}
          {/*  label="Miejsce zamieszkania" */}
          {/*  value="" */}
          {/*  placeholder="Miejscowość i nr mieszkania/domu" */}
          {/*  handleChangeText={() => {}} */}
          {/* /> */}

          <Button
            handlePress={() => this.props.navigation.navigate('Home')}
            icon="arrow-up"
          >
            Zapisz
          </Button>

          <Text style={globalStyles.smallText}>
            {'Położenie: 50º 3\' 48.151" N 19º 56\' 38.585" E'}
          </Text>

          <Text style={globalStyles.smallText}>
            Nazwa urządzenia: {`${Device.deviceName}`}
          </Text>

          <Text style={globalStyles.smallText}>
            Identyfikator urządzenia: {`${Device.brand} ${Device.modelName} ${Device.osName} ${Device.osBuildId} `}
          </Text>
        </View>
      </Wrapper>
    );
  }
}

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};
