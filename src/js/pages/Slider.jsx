import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { nextImg, prevImg, changeSource, setRemote } from '../redux/actions'

 class Slider extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            length: 0
        }
    }    

    
    async componentDidMount() {
        const response = await fetch('https://imagesapi.osora.ru/');
        const json = await response.json();
        this.props.setRemote(json)
        this.getLength()
    }


    getLength() {
        if (this.props.slider.source === 'local') {
            this.setState({length : this.props.slider.local.length})
        } else if (this.props.slider.source === 'remote'){
            this.setState({length : this.props.slider.remote.length})
        }
    }

    onNext() {
        this.getLength()
        if(this.props.slider.imgId !== this.state.length - 1) {
            this.props.nextImg(this.props.slider.imgId + 1)
        } else { 
            this.props.nextImg(0)
        }
    }

    onPrev() {
        this.getLength()
        if (this.props.slider.imgId === 0) {
            this.props.prevImg(this.state.length - 1)
        } else { 
            this.props.prevImg(this.props.slider.imgId - 1)
        }
    }

    onChangeSource() {
        if (this.props.slider.source === 'local') {
            this.props.changeSource('remote')
        } else if (this.props.slider.source === 'remote') {
            this.props.changeSource('local')
        }
    }
 
    render(){
        return(
            <div className='slider'>
                <div className="slider-wrapper">
                    <div className="slider-button" onClick={this.onPrev.bind(this)}>prev</div>
                    { (this.props.slider.source === 'local' ) ? 
                        <img className="slider-img" alt="" src={this.props.slider.local[this.props.slider.imgId]}/> :
                        <img className="slider-img" alt="" src={this.props.slider.remote[this.props.slider.imgId]}/>
                    }
                    <div className="slider-button" onClick={this.onNext.bind(this)}>next</div>
                </div>
                <button className='slider-button' onClick={this.onChangeSource.bind(this)}>
                    switch to { this.props.slider.source === 'local' ? 'remote' : 'local' }
                </button>
                <Link to="/" className='slider-go-home-button'>back to main</Link>
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
    setRemote,
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider)