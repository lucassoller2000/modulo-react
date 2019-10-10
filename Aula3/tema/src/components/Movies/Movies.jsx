import React from 'react'
import Button from '../../components/generic/Button/Button'
export default class Movies extends React.Component {
        renderTable() {
            return <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableContent()}
                </tbody>
            </table>
        }
    
        render() {
            return this.renderTable()
        }
        
        renderTableContent() {
            return (
            <tr key={this.props.movie.id}>
                <td><img src={this.props.movie.image}/></td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.text}</td>
                <td>{this.props.movie.category}</td>   
                <td>
                    <Button 
                    onClick={() => this.props.onRemove(this.props.movies)} 
                    classButton="danger" 
                    text="Excluir"/>
                </td>
            </tr>
            )
    }
}

   