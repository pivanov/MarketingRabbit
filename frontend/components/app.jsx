import React from 'react';
import { Route } from 'react-router-dom'
import SharedPageContainer from './businesses/shared_page_container'

const App = () => (
  <div>
    <h1> Marketing Rabbit </h1>
    <Route exact path="/signup" component={SharedPageContainer} />
    <Route exact path="/login" component={SharedPageContainer} />
    <Route exact path="/bridge" component={SharedPageContainer}/>
  </div>
);

export default App;
