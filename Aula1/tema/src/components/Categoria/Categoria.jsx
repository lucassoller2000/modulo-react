import React from 'react'
import './Categoria.css'

export default class Categoria extends React.Component{
    render(){
        return <div className="noticia--content__categoria">
            {this.props.categoria}
        </div>
    }
}