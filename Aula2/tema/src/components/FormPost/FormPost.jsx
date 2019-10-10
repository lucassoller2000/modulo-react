import React from 'react'

import Button from '../generic/Button/Button'
import Select from '../generic/Select/Select'
import Input from '../generic/Input/Input'
import './FormPost.css'

export default class FormPost extends React.Component {

    constructor() {
        super()
        this.handdleChange = this.handdleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = this.getInitialState()
    }

    componentDidMount() {
        this.clearFormData()
    }

    handdleChange(e) {
        let state = this.state
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    getCategoriesOptions() {
        return [
            {
              value: '',
              text: ''
            },
            {
              value: 'Vingadores',
              text: 'Vingadores'
            },
            {
              value: 'Liga da Justiça',
              text: 'Liga da Justiça'
            },
            {
              value: 'Os Defensores',
              text: 'Os Defensores'
            },
            {
              value: 'X-Men',
              text: 'X-Men'
            },
            {
              value: 'Quarteto Fantástico',
              text: 'Quarteto Fantástico'
            },
            {
              value: 'Jovens Titãs',
              text: 'Jovens Titãs'
            },
            {
              value: 'Esquadrão Suicida',
              text: 'Esquadrão Suicida'
            },
            {
              value: 'Tropa dos Lanernas Verdes',
              text: 'Tropa dos Lanernas Verdes'
            },
            {
            value: 'Aves de Rapina',
            text: 'Aves de Rapina'
            },
          ]
    }

    getInitialState() {
        return {
            category: this.getCategoriesOptions()[0].value,
            title: '',
            text: ''
        }
    }

    clearFormData() {
        this.setState(this.getInitialState())
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmitForm(this.state)
        this.clearFormData()
        // this.getInitialState()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input
                    handdleChange={this.handdleChange}
                    name="title"
                    type="text"
                    placeholder="Titulo"
                    label="Titulo"
                    value={this.state.title}
                    required="required"
                />
                <Input
                    handdleChange={this.handdleChange}
                    name="text"
                    type="text"
                    placeholder="Descrição"
                    label="Descrição"
                    value={this.state.text}
                    required="required"
                />
                <Select label="Categoria"
                    name="category"
                    value={this.state.category}
                    options={this.getCategoriesOptions()}
                    handdleChange={this.handdleChange} 
                    required="required"/>
                <div className="buttons">
                    <Button classButton="primary" type="button" text="Limpar" />
                    <Button classButton="success" type="submit" text="Inserir" />
                </div>
            </form>
        )
    }
}