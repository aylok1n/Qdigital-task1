import React from 'react';
import { Link } from 'react-router-dom'

export default class Error404 extends React.Component{
    render() {
        return (
            <div classname='home'>
                <Link to="/" className='slider-go-home-button'>back to main</Link>
            </div>
        )
    }
}