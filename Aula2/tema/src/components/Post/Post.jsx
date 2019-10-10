import React from 'react'

import './Post.css'

import Button from '../generic/Button/Button'

export default class Post extends React.Component {

    render() {
        return <div className="post">
                <div className="postAtributtesTitle">{this.props.post.title}</div>
                <div className="postAtributtesText">{this.props.post.text}</div>
                <div className="postAtributtesCategory">{this.props.post.category}</div>
                <div className="postAtributtesButton"><Button text="Remover" classButton="danger" onClick={() => this.props.onRemove(this.props.post)} /></div>
            </div>
    }
}