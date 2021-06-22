import React from 'react';
import { Text, View, TouchableOpacity, BackHandler, Linking } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { styles } from './styles/styles';
import { reducer } from './js/redux/reducer';
import thunk from 'redux-thunk';
import { routes } from './js/routes';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.App}>
            {' '}
            {routes}
            <View style={styles.nav}>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text> Home </Text>{' '}
              </Link>
              <Link to="/slider" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text> Slider </Text>{' '}
              </Link>
              <Link to="/player" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text> Player </Text>{' '}
              </Link>
              <TouchableOpacity
                underlayColor="#f0f4f7"
                style={styles.navItem}
                onPress={() => Linking.openURL('https://q-digital.org')}>
                <Text> Browser </Text>{' '}
              </TouchableOpacity>
              <TouchableOpacity
                underlayColor="#f0f4f7"
                style={styles.navItem}
                onPress={BackHandler.exitApp}>
                <Text> Exit </Text>{' '}
              </TouchableOpacity>{' '}
            </View>{' '}
          </View>{' '}
        </NativeRouter>{' '}
      </Provider>
    );
  }
}

export default App;
