import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../redux/actions'

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
            <div className='slider'>
                <div className="slider-wrapper">
                    <div className="slider-button" onClick={this.onPrev}>prev</div>
                    { (this.props.source === 'local' ) ? 
                        <img className="slider-img" alt="" src={this.props.local[this.props.imgId]}/> :
                        <img className="slider-img" alt="" src={this.props.remote[this.props.imgId]}/>
                    }
                    <div className="slider-button" onClick={this.onNext}>next</div>
                </div>
                <button className='slider-button' onClick={this.onChangeSource}>
                    switch to { this.props.source === 'local' ? 'remote' : 'local' }
                </button>
                <Link to="/" className='slider-go-home-button'>back to main</Link>
            </div>
        
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