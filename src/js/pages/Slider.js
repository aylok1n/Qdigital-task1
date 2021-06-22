import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { actions } from '../redux/actions'
import { styles } from '../../styles/styles'

class Slider extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            length: 0
        }
        this.onNext = this.onNext.bind(this)
        this.onPrev = this.onPrev.bind(this)
        this.onChangeSource = this.onChangeSource.bind(this)
    }    

    
    async componentDidMount() {
        const response = await fetch('https://imagesapi.osora.ru/');
        const json = await response.json();
        this.props.setRemote(json)
        this.setLength()
    }


    setLength() {
        if (this.props.source === 'local') {
            this.setState({length : this.props.local.length})
        } else if (this.props.source === 'remote'){
            this.setState({length : this.props.remote.length})
        }
    }

    onNext() {
        if(this.props.imgId !== this.state.length - 1) {
            this.props.nextImg(this.props.imgId + 1)
        } else { 
            this.props.nextImg(0)
        }
    }

    onPrev() {
        if (this.props.imgId === 0) {
            this.props.prevImg(this.state.length - 1)
        } else { 
            this.props.prevImg(this.props.imgId - 1)
        }
    }

    onChangeSource() {
        if (this.props.source === 'local') {
            this.props.changeSource('remote')
        } else if (this.props.source === 'remote') {
            this.props.changeSource('local')
        }
        this.setLength()
    }
 
    render(){
        return(
            <View style={styles.slider}>
                <View style={styles.sliderWrapper}>
                    <TouchableOpacity style={styles.sliderButton} 
                        onPress={this.onPrev}>
                        <Text style={styles.sliderButtonText}>Prev</Text>
                    </TouchableOpacity>

                    { (this.props.source === 'local' ) ? 
                        <Image style={styles.sliderImg} source={this.props.local[this.props.imgId]}/> :
                        <Image style={styles.sliderImg} source={{uri : this.props.remote[this.props.imgId]}}/>
                    }

                    <TouchableOpacity style={styles.sliderButton} 
                        onPress={this.onNext}>
                        <Text style={styles.sliderButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.sliderButton} 
                    onPress={this.onChangeSource}>
                        <Text style={styles.sliderButtonText}>
                            switch to { this.props.source === 'local' ? 'remote' : 'local' }
                        </Text>
                </TouchableOpacity>

                <Link style={styles.sliderButton} to="/" >
                    <Text style={styles.sliderButtonTextUnderline}>back to main</Text>
                </Link>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider)