import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store, { addTask, updateTaskText } from './Redux/store'




export let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} addTask={addTask} updateTaskText={updateTaskText}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerender();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
