import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home/home';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home} />
         <Route path="home" component={Home} />
      </Route>
   </Router>
),
  document.getElementById('root')
);
