import React from 'react';

export default class Slider extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div classname='slider-container'>
                <input type='button' className='slider-button' value='назад' />
                <input type='button' className='slider-button' value='вперед' />
            </div>
        )
    }
}