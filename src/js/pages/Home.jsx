import React from 'react';

export default class Home extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    openSlider(){
        this.props.history.push('/slider')
    }
    render(){
        return(
            <div className='home'>
                <p className='home-text'>HELLO</p>
                <a className='home-button' onClick={this.openSlider.bind(this)}>Слайдер</a>
            </div>
        )
    }
}