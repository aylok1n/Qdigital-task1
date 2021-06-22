import React from "react";
import { Link } from "react-router-native";
import { View, Text } from 'react-native';
import { styles } from "../../styles/styles";

export default class Player extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.home}>
            <Text style={styles.homeText}>Player</Text>
            <Link to="/" style={styles.homeButton}>
                  <Text style={styles.homeButtonText}>go home</Text>
            </Link>
          </View>
        )
    }
}