import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SPA from './components/SPA';
import SuccessPage from './components/Success/Success';

const App =()=> {

  return (
   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SPA/> } />
		  <Route path="/success" element={ <SuccessPage/> } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;