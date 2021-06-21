import React from 'react';
import { connect } from 'react-redux'
import {nextImg, prevImg, changeSource, loadRemote} from '../redux/actions'

 class Slider extends React.Component{

    constructor(props){
        super(props)

    }    

    goHome() {
        this.props.history.push('/')
    }

    async componentDidMount() {
        const response = await fetch('https://imagesapi.osora.ru/');
        const json = await response.json();
        this.props.loadRemote(json)
    }

    next() {
        let length = 0
        if (this.props.slider.source === 'local'){
            length = this.props.slider.local.length
        } else if (this.props.slider.source === 'remote'){
            length = this.props.slider.remote.length
        }
        if(this.props.slider.imgId !== length - 1){
            this.props.nextImg(this.props.slider.imgId + 1)
        } else { 
            this.props.nextImg(0)
        }
    }

    prev() {
        let length = 0
        if (this.props.slider.source === 'local'){
            length = this.props.slider.local.length
        } else if (this.props.slider.source === 'remote'){
            length = this.props.slider.remote.length
        }
        if(this.props.slider.imgId !== 0){
            this.props.prevImg(this.props.slider.imgId - 1)
        } else { 
            this.props.prevImg(length - 1)
        }
    }

    source() {
        if (this.props.slider.source === 'local'){
            this.props.changeSource('remote')
        } else if (this.props.slider.source === 'remote') {
            this.props.changeSource('local')
        }
    }
 
    render(){
        return(
            <div className='slider'>
                <div className="slider-wrapper">
                    <div className="slider-button" onClick={this.prev.bind(this)}>prev</div>
                    { (this.props.slider.source === 'local' ) ? 
                        <img className="slider-img" alt="" src={this.props.slider.local[this.props.slider.imgId]}/> :
                        <img className="slider-img" alt="" src={this.props.slider.remote[this.props.slider.imgId]}/>
                    }
                    <div className="slider-button" onClick={this.next.bind(this)}>next</div>
                </div>
                <a className='slider-button' onClick={this.source.bind(this)}>switch to {
                this.props.slider.source == 'local' ? 'remote' : 'local'}</a>
                <a className='slider-go-home-button' onClick={this.goHome.bind(this)}>back to main</a>
            </div>
        
        )
    }
}
const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    nextImg,
    prevImg,
    changeSource,
    loadRemote,
}
export default connect(mapStateToProps,mapDispatchToProps)(Slider)