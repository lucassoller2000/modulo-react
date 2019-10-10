import React from 'react'
import './Post.css'
export default class Post extends React.Component{

    render(){
        return (
            <div className="post">
                <h1>{this.props.title}</h1>
                <p1>{this.props.text}</p1>
            </div>
        );
    }
}