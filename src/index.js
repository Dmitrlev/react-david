import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './useState/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderMain = () => {
  root.render(
    <BrowserRouter>
      <App State={store.getState()}
           dispatch={store.dispatch.bind(store)}
           />
    </BrowserRouter>
  );
}

renderMain(store.getState());
store.subscribe(renderMain);

// https://fix-price.by/ajax/confirm14_phone.php