import React from "react";
import { Link } from "react-router-native";
import {   View, Text } from 'react-native';
import { styles } from "../../styles/styles";

export default class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.homeText}>Home</Text>
        <Link to="/slider" style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Slider</Text>
        </Link>
      </View>
    );
  }
}