import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'views/Home';
import {BrowserRouter, Match, Miss } from 'react-router'
import Search from 'views/Search';
import NotFound from 'NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern ="/" component={Home} />
        <Match pattern ="/search" component={Search}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
