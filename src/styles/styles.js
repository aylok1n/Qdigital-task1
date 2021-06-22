import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        marginTop: 25,
        padding: 10,
        // backgroundColor: 'blue'
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
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    },
    home: {
        height: '95%',
        flexDirection: 'column',
        textAlign : 'center',
        backgroundColor : '#e5e5e5',
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
    }

    // App: {
    //     height : '100vh',
    //     textAlign : 'center',
    //     backgroundColor : '#e5e5e5',
    //     display: 'flex',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     justifyContent: 'center'
    // }
    //     home : {
    //       flexDirection: 'column',
    //     }
      
    //     homeText : {
    //       fontSize: '18px',
    //       text-transform: uppercase;
    //       margin-bottom: 20px;
    //     }
      
    //     .home-button {
    //       padding: 10px;
    //       box-sizing: border-box;
    //       background-color: $bg-color-button;
    //       color: #fff;
    //       cursor: pointer;
    //       text-decoration: underline;
    //     }
      
    //     .slider {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       flex-direction: column;
    //     }
      
    //     .slider-wrapper {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       flex-direction: row;
    //     }
      
    //     .slider-img {
    //       width: 600px;
    //       height: 400px;
    //     }
      
    //     .slider-button {
    //       padding: 10px;
    //       box-sizing: border-box;
    //       background-color: $bg-color-button;
    //       color: #fff;
    //       cursor: pointer;
    //       margin: 10px 10px 0px 10px;
    //     }
      
    //     .slider-go-home-button {
    //       padding: 10px;
    //       box-sizing: border-box;
    //       background-color: $bg-color-button;
    //       color: #fff;
    //       cursor: pointer;
    //       margin: 10px 10px 0px 10px;
    //       text-decoration: underline;
    //     }
    
  });