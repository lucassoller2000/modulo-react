import React from 'react'
export default class Button extends React.Component {

    getClassName() {
        return `btn btn-${this.props.classButton} ${this.props.class}`
    }
    render() {
        return <button className={this.getClassName()}
            onClick={this.props.onClick}
            type={this.props.type}>
            {this.props.text}</button>
    }

}