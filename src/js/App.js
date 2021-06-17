import '../scss/components/App.css';
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Slider from './pages/Slider'

class App extends React.Component {
  render() {
  const { history } = this.props
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route history={history} exact path='/' component={Home}/>
        <Route history={history} path='/slider' component={Slider}/>
        <Redirect to='/'/>
      </Switch>
    </div>
    </BrowserRouter>
  )};
}
export default App;
