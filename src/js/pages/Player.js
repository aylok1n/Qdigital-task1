import React from 'react';
import { Link } from 'react-router-native';
import { View, Text, Button } from 'react-native';
import { styles } from '../../styles/styles';
import {actions} from '../redux/actions';
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist : []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://imagesapi.osora.ru/?isAudio=true');
    const json = await response.json();
    this.setState({playlist : this.props.audio.concat(json)})
    console.log(this.state.playlist)
  }

  start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    let audio = this.state.playlist[this.props.audioId];
    console.log(audio)
    // Add a track to the queue
    await TrackPlayer.add({
        // id: 'trackId',
        url: this.state.playlist[4],
        title: this.state.playlist[this.props.audioId].substr(12),
    });

    // Start playing it
    await TrackPlayer.play();
};

  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.homeText}>Player</Text>
        <Link to="/" style={styles.homeButton}>
          <Text style={styles.homeButtonText}>go home</Text>
        </Link>
        <Button onPress={this.start.bind(this)} title={'dfg'}/>
        <Text>{this.props.audio[this.props.audioId]}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return state;
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
