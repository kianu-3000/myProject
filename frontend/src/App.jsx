import { useState } from 'react'
import Home from './components/home_page/home';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = 'Welcome to React + Vite';

  return (
    <Router>
      <div className='container'>

        <Navigation/>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
