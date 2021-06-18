import React from 'react';
import { connect } from 'react-redux'
import { api, remoteImg } from '../api';
import {nextImg, prevImg, changeSource, loadRemote} from '../redux/actions'

 class Slider extends React.Component{
    constructor(props){
        super(props)
    }    
    goHome(){
        this.props.history.push('/')
    }
    async componentDidMount(){
        await api(loadRemote)
        await this.setState(this.props.slider)
        // this.setState({currentImage: this.state.local[this.state.imgId]})
        console.log(this.state)
    }
    
    render(){
        return(
            <div className='slider'>
                <div className="slider-wrapper">
                    <div className="slider-button" onClick={this.props.prevImg}>prev</div>

                    <img className="slider-img" alt="" src={this.props.slider.local[this.props.slider.imgId]}/>

                    <div className="slider-button" onClick={this.props.nextImg}>next</div>
                </div>
                <a className='slider-button' onClick={this.props.changeSource}>switch to </a>
                <a className='slider-button' onClick={this.goHome.bind(this)}>back to main</a>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return state
}
const mapDispatchToProps = {
    nextImg,
    prevImg,
    changeSource,
    loadRemote
}
export default connect(mapStateToProps,mapDispatchToProps)(Slider)