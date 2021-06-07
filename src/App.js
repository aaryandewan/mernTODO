import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './pages/Register'
import Welcome from './pages/Welcome'

function App(){
  return(
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/'><Welcome /></Route>
        <Route exact path='/register'><Register /></Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
