import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post title="Titulo com prop" text="Muussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Paisis, filhis, espiritis santis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris."/>
      </div>
    );
  }
}

export default App; 
        
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        
        // </p>