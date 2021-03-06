import React from 'react';
import {Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage'; 
import Login from './components/pages/Login';

const App = () => (
    <div className="ui container">
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={Login} />
    </div>
);



export default App;
