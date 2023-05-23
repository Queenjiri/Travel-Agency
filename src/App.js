import React from "react";
import Header from './Header'
import SignUp from './SignUp';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
   
    <div className="App">
    <Header/>

    <Router>
    <Switch>

  <Route path="/">
  <SignUp/>
  </Route>

  <Route exact path="/">

  <Login/>
  </Route>

  </Switch>
  </Router>

</div>

 
  );
}

export default App;
