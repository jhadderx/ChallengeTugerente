import React from 'react';
import '../styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import valuesDropdown from '@hooks/valuesDropdown';

const App = () => {
  const initialState = valuesDropdown();
  return (
    <AppContext.Provider value={ initialState } >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;