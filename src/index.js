import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import App from './App';
import Home from './component/Home/Home';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(   
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<App />} />
         <Route path='/home' element={<Home />} />
      </Routes>
   </BrowserRouter>
);