import React from 'react'
import Button from '../../generic/Button/Button'
import './PostCard.css'
import ReactMarkdown from 'react-markdown'

export default class PostCard extends React.Component{

    markdownTitle(title){
        return<ReactMarkdown source={title} />
    }

    markdownDescription(description){
        return<ReactMarkdown source={description} />
    }
    render() {
        return (
            <div className="miniPost">
                <div className="miniPost--content">
                    <div className="miniPost--image">
                        <img alt="" className="postCard-image" src={this.props.image} />
                    </div>
                    <div className="miniPost--title"><h5>{this.markdownTitle(this.props.title)}</h5></div>
                    <div className="miniPost--description"><h5>{this.markdownDescription(this.props.description)}</h5></div>
                </div>
                <div className="miniPost--button">
                    <Button classButton="success" isOutline={true} onClick={this.props.onClickReadMoreButton} text="Ler mais" />
                    <Button classButton="success" isOutline={true} onClick={this.props.onClickEditButton} text="Editar" />
                    <Button classButton="success" isOutline={true} onClick={this.props.onClickDeleteButton} text="Excluir" />
                </div>   
            </div>)
    }
}