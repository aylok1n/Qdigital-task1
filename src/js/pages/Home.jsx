import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div classname='home'>
                <p className='home-text'>HELLO</p>
                <a href='/slider' className='home-button'>Слайдер</a>
            </div>
        )
    }
}