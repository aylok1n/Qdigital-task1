import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    App: {
        position: 'relative',
        paddingBottom: 50,
        height: '100%'
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: '#e5e5e5',
        borderWidth:1
    },
    home: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    homeButton: {
        padding: 10,
        backgroundColor: '#000',
    },
    homeButtonText: {
        color: "#FFF",
        textDecorationLine: 'underline',
    },
    slider: {
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    sliderWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sliderImg: {
        width: 300,
        height: 200
    },
    sliderButton: {
        padding: 10,
        backgroundColor: '#000',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    sliderButtonText: {
        color: "#FFF"
    },
    sliderButtonTextUnderline : {
        textDecorationLine: 'underline',
        color: "#FFF"
    }
});