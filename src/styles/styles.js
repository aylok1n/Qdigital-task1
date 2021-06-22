import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: '#e5e5e5',
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    },
    home: {
        height: '95%',
        flexDirection: 'column',
        textAlign : 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    homeButton: {
        padding: 10,
        backgroundColor: '#000',
    },
    homeButtonText: {
        color: "#FFF"
    },
    slider : {
        height: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    sliderWrapper : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sliderImg : {
        width: 300,
        height: 200
    },
    sliderButton : {
        padding: 10,
        backgroundColor: '#000',
        marginTop: 10, 
    },
    sliderButtonText: {
        color: "#FFF"
    }
  });