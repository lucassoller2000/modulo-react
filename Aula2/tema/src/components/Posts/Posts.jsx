import React from 'react'

import Post from '../Post/Post'


export default class Posts extends React.Component {

    renderPosts() {
        return this.props.posts.map((post, key) => {
            return <Post key={key} onRemove={this.props.onRemove} post={post} />
        })
    }

    render() {
        return this.renderPosts()
    }
}