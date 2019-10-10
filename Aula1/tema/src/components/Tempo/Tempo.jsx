import React from 'react'
import './Tempo.css'

export default class Tempo extends React.Component{
    
    render(){
        return(
            <div className="noticia--content__horario">
                {this.props.tempo}
            </div>
        )
    }
}