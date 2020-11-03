import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Dashboard from './components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen  from './screens/HomeScreen';

function App() {

 


  return (
    <BrowserRouter>
      <div className="grid-container">
       <Dashboard />
       <main>  <br/>
            <HomeScreen/> 

       </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
