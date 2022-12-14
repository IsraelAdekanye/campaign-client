import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SPA from './components/SPA';
import SuccessPage from './components/Success/Success';
import PaymentOptions from './components/PaymentOption/PaymentOptions';
import Account from './components/AccountDetails/AccountDetails';

const App =()=> {

  return (
   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SPA/> } />
		      <Route path="/success" element={ <SuccessPage/> } />
          <Route path="/PaymentOptions" element={ <PaymentOptions/> } />
          <Route path="/Account" element={ <Account/> } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;