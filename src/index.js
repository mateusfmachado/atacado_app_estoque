import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import { NativeRouter, Route, Link } from 'react-router-native';

import InitialScreen from './components/estoque';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={InitialScreen} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    padding: 10,
  }
});
