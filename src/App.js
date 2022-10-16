import { Route, Routes } from 'react-router-dom';
import  Basket  from './Basket';
import Home from './Home'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
function App() {
  
  return (
    <>
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<Home />} exact  /> 
      <Route path= "/cart" element = {<Basket />} exact  />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </>
  );
}

export default App;