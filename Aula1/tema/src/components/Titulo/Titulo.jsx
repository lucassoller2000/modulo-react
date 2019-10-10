import React from 'react'
import './Titulo.css'

export default class Tempo extends React.Component{
    render(){
        return (<div className="noticia--content__titulo">
            {this.props.titulo}      
        </div>)
    }
}