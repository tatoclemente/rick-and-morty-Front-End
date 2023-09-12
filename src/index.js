import React from 'react'
import ReactDOM from 'react-dom/client'
import 'index.css'
import App from 'App'
import {BrowserRouter} from 'react-router-dom'
import store from 'redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'


// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://rym-db.onrender.com/'


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />        
      </BrowserRouter>    
    </React.StrictMode>
  </Provider>
);
