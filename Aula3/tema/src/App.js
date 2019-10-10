import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import Home from './components/Home/Home'
import Button from './components/generic/Button/Button'

import './App.css'

const SELECTED_COMPONENTS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  HOME: 'HOME'
}

export default class App extends Component {
  home = new Home()
  constructor() {
    super()
    this.state = {
      selectedComponent: SELECTED_COMPONENTS.LOGIN,
    }
    this.onClickButtonLogin = this.onClickButtonLogin.bind(this)
    this.onClickButtonRegister = this.onClickButtonRegister.bind(this)
    this.onClickButtonHome = this.onClickButtonHome.bind(this)
  }

  renderContent() {
    if (this.state.selectedComponent === SELECTED_COMPONENTS.LOGIN) {
      return <LoginForm />
    } else if (this.state.selectedComponent === SELECTED_COMPONENTS.REGISTER) {
      return <RegisterForm />
    }else if (this.state.selectedComponent === SELECTED_COMPONENTS.HOME){
      if(localStorage.getItem('logged_user')){
        return (<div>
                  <Home onSubmitForm={this.onSubmitForm}/>
              </div>)
      }else{
        this.onClickButtonLogin()
      } 
    }
    return ''
  }

  onClickButtonLogin() {
    this.setSelectedComponent(SELECTED_COMPONENTS.LOGIN)
  }

  onClickButtonRegister() {
    this.setSelectedComponent(SELECTED_COMPONENTS.REGISTER)
  }

  onClickButtonHome() {
    this.setSelectedComponent(SELECTED_COMPONENTS.HOME)
  }

  setSelectedComponent(selectedComponent) {
    this.setState({
      selectedComponent
    })
  }

  render() {
    return (
        <div className="App">
          <div className="App--navbar">
            <Button onClick={this.onClickButtonLogin} text="Login" />
            <Button onClick={this.onClickButtonRegister} text="Registrar" />
            <Button onClick={this.onClickButtonHome} text="Home" />
          </div>
          <div className="App--content">
            {this.renderContent()}
          </div>
        </div>
    )
  }
}
