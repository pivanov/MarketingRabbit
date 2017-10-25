import React from 'react';
import BusinessSignUpContainer from './businesses/business_signup_container'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <h1> Marketing Rabbit </h1>
    <Route path="/signup" component={BusinessSignUpContainer} />
  </div>
);

export default App;
