import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss } from 'react-router'

import Home from 'views/Home';
import {Search} from 'views/Search';
import NotFound from 'NotFound';
import {SingleAnnounce} from 'views/SingleAnnounce';
import {ViewProfile} from 'views/ViewProfile';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern ="/" component={Home} />
        <Match pattern ="/search" component={Search}/>
        <Match pattern ="/cars/:carId" component={SingleAnnounce}/>
        <Match pattern ="/users" component={ViewProfile}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
