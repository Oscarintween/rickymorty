import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './componentes/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Alive from './componentes/Alive';
import Dead from './componentes/Dead';
import Unknown from './componentes/Unknown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Alive' element={<Alive />} />
      <Route path='/Dead' element={<Dead />} />
      <Route path='/Unknown' element={<Unknown />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
