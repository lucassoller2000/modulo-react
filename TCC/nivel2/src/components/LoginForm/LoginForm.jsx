import React from 'react'
import Input from '../generic/Input/Input'
import Button from '../generic/Button/Button'
import Alert from '../generic/Alert/Alert'
import ApiService from '../../Services/ApiService'
import { Redirect } from 'react-router-dom'

export default class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()    
        this.handleChange = this.handleChange.bind(this)
        this.onClickLoginButton = this.onClickLoginButton.bind(this)
        this.state = { shouldRedirectHome: false }
    }

    getInitialState() {
        return {
            email: '',
            password: '',
            error: ''
        }
    }

    handleChange(event) {
        const target = event.target 
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onClickLoginButton() {
        const account = this.state
            return ApiService.login(account.email, account.password)
                .then(res => {
                    this.setState({
                        shouldRedirectHome: true
                    })
                })
                .catch(resp => {
                    this.setState({
                        error: resp.response.data.error
                    })
                })
    
    }

    newMethod() {
        this.props.onClickButtonHome();
    }

    renderError() {
        return this.state.error ? <Alert text={this.state.error} alertType="danger" class="alert"/> : undefined
    }

    render() {
        if (this.state.shouldRedirectHome) {
            return <Redirect to='/home' />
        }
        return (
                <div className="container">
                
                    <div className="col-4 content"><div className="pageTitle">Login</div>
                        <div className="col-10">
                            {this.renderError()}
                            <Input
                                label="E-mail"
                                value={this.state.email}
                                name="email"
                                placeholder="Digite seu e-mail"
                                handleChange={this.handleChange}
                                type="email"
                            />
                            <Input
                                label="Senha"
                                value={this.state.password}
                                name="password"
                                placeholder="Digite sua senha"
                                handleChange={this.handleChange}
                                type="password"
                            />
                            <Button type="button"
                                text="Login"
                                onClick={this.onClickLoginButton} 
                                classButton="primary"/>
                        </div>
                    </div>
                </div>
        )
    }
}