import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Home from './containers/Home';
import Settings from './containers/Settings';
import Status0 from './containers/Status0';
import Status1 from './containers/Status1';
// import Status2 from './containers/Status2';
// import Needs from './containers/Needs';
import Submitted from './containers/Submitted';
import globalStyles from './globalStyles';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={globalStyles.scrollViewContainer} contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={globalStyles.container}>
          {/*<Home />*/}
          {/*<Settings />*/}
          {/*<Status0 />*/}
          {/*<Status1 />*/}
          {/*<Status2 />*/}
          {/*<Needs />*/}
          <Submitted />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
