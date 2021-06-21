import React from 'react';
import {Link} from 'react-router-dom'
export default class Home extends React.Component{

    render(){
        return(
            <div className='home'>
                <p className='home-text'>HELLO</p>
                <Link to="/slider" className='home-button'>Слайдер</Link>
            </div>
        )
    }
}