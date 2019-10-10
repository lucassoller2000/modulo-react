import React from 'react'
export default class Input extends React.Component {

    getClassName(){
        return `form-control ${this.props.className}`
    }

    render() {
        return <div className="form-group">
            <label>{this.props.label}</label>
            <input
                onChange={this.props.handleChange}
                value={this.props.value}
                type={this.props.type}
                className={this.getClassName()}
                name={this.props.name}
                placeholder={this.props.placeholder}
                height={this.props.height} />
        </div>
    }

}