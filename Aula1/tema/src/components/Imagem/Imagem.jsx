import React from 'react'

export default class Imagem extends React.Component{
    render(){
        return <div className="noticia--imagem">
                <img className="noticia--imagem__img" src={this.props.imagem}/>
            </div>
    }
}