import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Dashboard from './components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen  from './screens/HomeScreen';
import JobInfoScreen  from './screens/JobInfoScreen';
import CandidateScreen  from './screens/CandidateScreen';

function App() {


  return (
    <BrowserRouter>
      <div className="grid-container">
       <Dashboard />
       <main>  <br/>
       <Route path="/jobinfo" component={JobInfoScreen} />
            <Route path="/candidate" component={CandidateScreen} />
            
            <Route exact path="/" component={HomeScreen} />
            

       </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
