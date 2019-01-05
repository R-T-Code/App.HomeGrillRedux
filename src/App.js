import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './index.module.scss';

import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';
import Statistics from './components/Statistics/Statistics';
import Settings from './components/Settings/Settings';
import Greeting from './components/Greeting/Greeting';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/projects/reactjs/home-grill'>
        <div className="App">
            <Nav />
            <div className={style.content}>
                    <Route path='/' component={Menu}/>
                <div className={style.content__nav}>
                    <Route exact path='/' component={Greeting}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/statistics' component={Statistics}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
