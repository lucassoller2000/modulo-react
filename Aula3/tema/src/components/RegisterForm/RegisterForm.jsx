import React from 'react'
import Input from '../generic/Input/Input'
import Button from '../generic/Button/Button'
import Alert from '../generic/Alert/Alert'
import RegisterService from '../../Services/RegisterService'
import LoginService from '../../Services/LoginService'

const SELECTED_CONTENTS = {
    HOME: 'HOME'

}

export default class RegisterForm extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
        this.handdleChange = this.handdleChange.bind(this)
        this.onClickRegisterButton = this.onClickRegisterButton.bind(this)
    }

    getInitialState() {
        return {
            email: '',
            name: '',
            password: '',
            cpf: '',
            dateOfBirth: '',
            error: ''
        }
    }

    handdleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onClickRegisterButton() {
        const account = this.state
            RegisterService
            .register(account.email, account.password)
            .then((result) => {
                this.setState(this.getInitialState())
            }).catch((err) => {
                this.setState({
                    error: err.response.data.error
                })
            })
    }

    renderError() {
        return this.state.error ? <Alert text={this.state.error} alertType="danger" /> : undefined
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <Input
                    label="E-mail"
                    value={this.state.email}
                    name="email"
                    placeholder="Digite seu e-mail"
                    handdleChange={this.handdleChange}
                    type="email"
                />

                <Input
                    label="Nome"
                    value={this.state.name}
                    name="name"
                    placeholder="Digite seu nome"
                    handdleChange={this.handdleChange}
                    type="text"
                />
                <Input
                    label="Senha"
                    value={this.state.password}
                    name="password"
                    placeholder="Digite sua senha"
                    handdleChange={this.handdleChange}
                    type="password"
                />
                <Button type="button"
                    text="Registrar"
                    onClick={this.onClickRegisterButton}
                    classButton="primary" />
            </div>

        )
    }
}