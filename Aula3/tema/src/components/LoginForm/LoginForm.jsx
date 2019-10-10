    import React from 'react'
    import Input from '../generic/Input/Input'
    import Button from '../generic/Button/Button'
    import Alert from '../generic/Alert/Alert'
    import LoginService from '../../Services/LoginService'

    export default class LoginForm extends React.Component {
        constructor() {
            super()
            this.state = this.getInitialState()    
            this.handdleChange = this.handdleChange.bind(this)
            this.onClickLoginButton = this.onClickLoginButton.bind(this)
        }
    
        getInitialState() {
            return {
                email: '',
                password: '',
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

        onClickLoginButton() {
            const account = this.state
                LoginService
                .login(account.email, account.password)
                .then((result) => {              
                    this.setState(this.getInitialState())
                    
                }).catch((err) => {
                    console.log(err)
                    this.setState({
                        error: err.response.data.error
                    })
                })
        }
    
        newMethod() {
            this.props.onClickButtonHome();
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
                        label="Senha"
                        value={this.state.password}
                        name="password"
                        placeholder="Digite sua senha"
                        handdleChange={this.handdleChange}
                        type="password"
                    />
                    <Button type="button"
                        text="Login"
                        onClick={this.onClickLoginButton} 
                        classButton="primary"/>
                </div>
    
            )
        }
    }