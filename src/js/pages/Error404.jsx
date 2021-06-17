import React from 'react';

export default class Error404 extends React.Component{
    goHome(){
        this.props.history.push('/')
    }
    render(){
        return(
            <div classname='home'>
                <a className='home-button' onClick={this.goHome.bind(this)}>Вернуться на главную</a>
            </div>
        )
    }
}