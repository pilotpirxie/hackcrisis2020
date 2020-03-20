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

export default class Status2 extends Component {
  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>

          <NavbarProgressbar
            current={3}
            max={3}
            icon="arrow-left"
            handlePress={() => this.props.navigation.navigate('Status1')}
          />

          <Input
            label="Dodatkowe uwagi i potrzeby"
            value=""
            handleChangeText={() => {}}
            placeholder="Uwagi i potrzeby"
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

Status2.propTypes = {
  navigation: PropTypes.object.isRequired,
};