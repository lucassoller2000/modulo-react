import React from 'react';
import ReactDOM from 'react-dom';
// import ReactMarkdown from 'react-markdown'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
    ,document.getElementById('root'));
registerServiceWorker();
