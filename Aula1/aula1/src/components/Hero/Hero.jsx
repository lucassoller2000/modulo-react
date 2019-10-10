import React from 'react'
import './Hero.css'
export default class Hero extends React.Component{

    render(){
        return (
            <div className="heroi">
                <img src={this.props.image}/>
            </div>
        );
    }
}