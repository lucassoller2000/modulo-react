import React, { Component } from 'react';
import './App.css';
import dados from './dados'
import Classificacao from './components/Classificacao/Classificacao'

import Noticias from './components/Noticias/Noticias'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Noticias noticias= {dados}/> */}
          <Classificacao />
      </div>
      
    );
  }
}

export default App;
