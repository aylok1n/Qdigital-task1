import React from 'react';
export default class Slider extends React.Component{
    constructor(props){
        super(props)
    }    
    
    render(){
        return(
            <div className='slider'>
                <input type='button' className='slider-button' value='назад' />
                <img className='slider-img'></img>
                <input type='button' className='slider-button' value='вперед' />
            </div>
        )
    }
}