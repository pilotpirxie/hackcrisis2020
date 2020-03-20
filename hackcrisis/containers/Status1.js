import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NavbarProgressbar from '../components/NavbarProgressbar';
import Button from '../components/Button';
import globalStyles from '../globalStyles';
import Input from '../components/Input';
import Wrapper from "../components/Wrapper";
import PropTypes from "prop-types";
import Status0 from "./Status0";

export default class Status1 extends Component {
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
            value=""
            handleChangeText={() => {}}
            placeholder="Temperatura ciała"
          />

          <Input
            label="Czy odczuwasz bóle głowy?"
            value=""
            handleChangeText={() => {}}
            placeholder="tak/nie"
          />

          <Input
            label={'Czy cierpisz na kaszel? \nMokry czy suchy?'}
            value=""
            handleChangeText={() => {}}
            placeholder="Kaszel"
          />

          <Input
            label={'Czy masz problemy \nz oddychaniem?'}
            value=""
            handleChangeText={() => {}}
            placeholder="Problemy z oddychaniem"
          />

          <Button
            handlePress={() => this.props.navigation.navigate('Status2')}
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