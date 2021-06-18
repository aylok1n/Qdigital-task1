import '../scss/index.scss'
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Slider from './pages/Slider'
import Error404 from './pages/Error404';

class App extends React.Component {
  render() {
  const { history } = this.props
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route history={history} exact path='/' component={Home}/>
        <Route history={history} path='/slider' component={Slider}/>
        <Route history={history} path='/error' component={Error404}/>
        <Redirect to='/error'/>
      </Switch>
    </div>
    </BrowserRouter>
  )};
}
export default App;
