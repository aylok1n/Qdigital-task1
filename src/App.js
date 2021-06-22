import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {styles} from './styles/styles'
import  Home  from './js/pages/Home'
import Slider from './js/pages/Slider'

class App extends React.Component {
  render(){
    return (
      <NativeRouter>
        <View style={styles.container}>

          <Route exact path="/" component={ Home } />
          {/* <Route path="/slider" component={ Slider } /> */}

          <View style={styles.nav}>

            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>

            <Link to="/slider" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Slider</Text>
            </Link>

          </View>
        </View>
      </NativeRouter>
    )
  }
}


export default App;
