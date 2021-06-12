import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store'
import StoreContext from './StoreContext';



let rerender = (state) => {
  /* debugger */
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
           <App /* state={state} dispatch={store.dispatch.bind(store)} store={store} *//>
        </StoreContext.Provider>
       
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
