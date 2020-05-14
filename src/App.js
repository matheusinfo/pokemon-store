import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';

import GlobalStyle from './styles/global';
import Route from './routes';
import Header from './components/Header';

import store from './store/index';

function App() {
  return (
   <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <ToastContainer/>
        <GlobalStyle/>
        <Route/>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
