import React from 'react'
import './Descricao.css'

export default class Descricao extends React.Component{
    render(){
        return <div className="noticia--content__descricao">
            {this.props.descricao}
        </div>
    }
}