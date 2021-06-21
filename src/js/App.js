import '../scss/index.scss'
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Slider from './pages/Slider'
import Error404 from './pages/Error404';

class App extends React.Component {
  render() {
  return (
    <Router >
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/slider' component={Slider}/>
        <Route path='/error' component={Error404}/>
        <Redirect to='/error'/>
      </Switch>
    </div>
    </Router>
  )};
}
export default App;
