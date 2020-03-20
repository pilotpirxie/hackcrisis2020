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
import Article from "./Article";

export default class Needs extends Component {
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
            value=""
            handleChangeText={() => {}}
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
