import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import { NativeRouter, Route, Link } from 'react-router-native';

import InitialScreen from './components/estoque';
import Scanner from './components/estoque/scanner';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={InitialScreen} />
            <Route path="/scanner" component={Scanner} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
