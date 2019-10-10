import React from 'react'
export default class EmptyList extends React.Component{
    render(){
        return(
            <div className="jumbotron emptyList">
                <h1 className="emptyListText">Você não tem nenhum filme cadastrado</h1>
            </div>
        )
    }
}